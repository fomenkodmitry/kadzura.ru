import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {
    thunkGetInterviewQuestions
} from "../features/interviewQuestions/thunkGetInterviewQuestions";
import {Paging} from "../models/Paging";
import {Filters} from "../models/Filters";
import {useNamedSelector} from "../hooks/useNamedSelector";
import {InterviewQuestionListDto} from "../models/InterviewQuestion";
import InfiniteScroll from "react-infinite-scroll-component";

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
        display: 'inline-block'
    },
    infinityScroll: {
        position: 'relative',
    },
    containerItem: {
        margin: '16px auto',
        width: '95%'
    }
}));

export const InterviewQuestionList: React.FC = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const interviewQuestions = useNamedSelector('interviewQuestions')
    let getCurrentPage = Math.ceil(((interviewQuestions?.totalCount ?? 1)/interviewQuestions?.data?.length))

    useEffect(() => {
            const page: Paging = {
                Page: 1,
                Count: 20
            };
            const filter: Filters = [];
            dispatch(thunkGetInterviewQuestions({Paging: page, Filters: filter}))
        },
        [dispatch]
    )

    const fetchMoreData = () => {
        const filter: InterviewQuestionListDto = {
            Filters: [],
            Paging: {
                Page: getCurrentPage + 1,
                Count: 20
            }
        }
        getQuestions(filter)
    };

    const getQuestions = (filter?: InterviewQuestionListDto) => {
        if (filter == undefined) {
            const page: Paging = {
                Page: 1,
                Count: 20
            };
            const filters: Filters = [];
            filter = {
                Paging: page,
                Filters: filters
            }
        }
        //обновляем данные
        dispatch(thunkGetInterviewQuestions(filter))
    };
    return (
        <Grid container>
            <InfiniteScroll
                dataLength={interviewQuestions?.data?.length ? interviewQuestions?.data?.length : 0}
                next={fetchMoreData}
                hasMore={( getCurrentPage < (interviewQuestions?.totalCount ?? 0))}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{textAlign: "center"}}>
                        <b>Yay! You have seen it all</b>
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
        </Grid>
    );
}