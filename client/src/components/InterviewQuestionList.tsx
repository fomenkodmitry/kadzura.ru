import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {thunkGetInterviewQuestions} from "../features/interviewQuestions/thunkGetInterviewQuestions";
import {useNamedSelector} from "../hooks/useNamedSelector";
import {InterviewQuestionListDto} from "../models/InterviewQuestion";
import InfiniteScroll from "react-infinite-scroll-component";
import {clearInterviewQuestions} from "../features/interviewQuestions/interviewQuestionsSlice";

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '90.55%',
        flexShrink: 0,
    },
    tags: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    author: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.hint,
    },
    textHidden: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    accordionItem: {
        whiteSpace: 'pre-line',
        wordBreak: 'break-word',
    },
    details: {
        display: 'block'
    },
    infinityScroll: {
        position: 'relative'
    },
    containerItem: {
        margin: '16px auto',
        padding: '0 1em'
    }
}));

export const InterviewQuestionList: React.FC = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const interviewQuestions = useNamedSelector('interviewQuestions')
    const tagSelector = useNamedSelector('tagsSelector')
    const search = useNamedSelector('search')

    const [page, setPage] = useState(1)

    useEffect(() => {
            const filter: InterviewQuestionListDto = {
                Filters: [],
                Paging: {
                    Page: page,
                    Count: 20
                }
            }
            if (tagSelector?.data?.length != 0) {
                filter.Filters = [...filter.Filters,
                    {
                        field: "tags.tagId",
                        operation: "equal",
                        values: [...tagSelector?.data?.map(p => p.id)]
                    }
                ]
            }
            if (search?.text.length) {
                filter.Filters = [...filter.Filters,
                    {
                        field: "fulltext",
                        operation: "contains",
                        values: [search.text]
                    }
                ]
            }
            dispatch(thunkGetInterviewQuestions(filter))
        },
        [dispatch, tagSelector, page, search]
    )

    useEffect(() => {
        dispatch(clearInterviewQuestions())
        setPage(1)
    }, [tagSelector, search])

    return (
        <Grid container style={{justifyContent: 'center'}}>
            <div style={{flexBasis: '100%'}}>
                <InfiniteScroll
                    dataLength={interviewQuestions.data.length}
                    next={() => {
                        setPage(page + 1)
                    }}
                    hasMore={page !== interviewQuestions.totalPage}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{textAlign: "center"}}>
                            <b>Всё :(</b>
                        </p>
                    }
                    className={classes.infinityScroll}
                >
                    {
                        interviewQuestions?.data?.map(({id, question, answer, tags}) => {
                            return (
                                <Grid item xs={12} key={id}>
                                    <div className={classes.containerItem}>
                                        <Accordion className={classes.accordionItem}>
                                            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                                <Typography className={classes.heading}>
                                                    {question}
                                                    <span className={classes.tags}> | Tags: {
                                                        tags.map(p => p.tag.name).join(", ")
                                                    }</span>
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails className={classes.details}
                                                              dangerouslySetInnerHTML={{__html: answer}}>
                                            </AccordionDetails>
                                        </Accordion>
                                    </div>
                                </Grid>
                            )
                        })
                    }
                </InfiniteScroll>
            </div>

        </Grid>
    );
}