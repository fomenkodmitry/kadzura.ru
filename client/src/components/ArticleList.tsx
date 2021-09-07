import React, {FC, useEffect, useState} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useNamedSelector} from "../hooks/useNamedSelector";
import {InterviewQuestionListDto} from "../models/InterviewQuestion";
import {thunkGetInterviewQuestions} from "../features/interviewQuestions/thunkGetInterviewQuestions";
import {clearInterviewQuestions} from "../features/interviewQuestions/interviewQuestionsSlice";
import {clearArticle} from "../features/articles/articleSlice";
import {thunkGetArticle} from "../features/articles/thunkGetIArticle";
import InfiniteScroll from "react-infinite-scroll-component";
import {Button, Grid} from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        listItem: {
            width: '70%',
        },
        divider: {
            width: '70%',
        },
        infinityScroll: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        tags: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
        },
    }),
);

export const ArticleList: FC = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const article = useNamedSelector('article')
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
            dispatch(thunkGetArticle(filter))
        },
        [dispatch, tagSelector, page, search]
    )

    useEffect(() => {
        dispatch(clearArticle())
        setPage(1)
    }, [tagSelector, search])

    const history = useHistory();
    const toLink = (link: string) => {
        history.push(link);
    };
    return (
        <List style={{justifyContent: 'center'}}>
            <InfiniteScroll
                dataLength={article.data.length}
                next={() => {
                    setPage(page + 1)
                }}
                hasMore={page !== article.totalPage}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{textAlign: "center"}}>
                        <b>Всё :(</b>
                    </p>
                }
                className={classes.infinityScroll}
            >
                {
                    article?.data?.map(({id, title, text, tags}) => {
                        return (
                            <>
                                <ListItem className={classes.listItem} alignItems="center">
                                    <ListItemText
                                        primary={title}
                                        primaryTypographyProps={{variant: "h4"}}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="textPrimary"
                                                >
                                                </Typography>
                                                <span className={classes.tags}> | Tags: {
                                                    tags.map(p => p.tag.name).join(", ")
                                                }</span>
                                                <br/>
                                                {text.replace(/(<([^>]+)>)/gi, "").substring(0, 400)}
                                                <br/>
                                                <Button onClick={() => toLink("/article/" + id)}>
                                                    Читать
                                                </Button>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider className={classes.divider} light/>
                            </>
                        )
                    })
                }
            </InfiniteScroll>
        </List>
    )
}