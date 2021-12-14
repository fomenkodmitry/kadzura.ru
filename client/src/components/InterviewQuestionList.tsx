﻿import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import {InterviewQuestionPaged} from "../models/InterviewQuestion";
import InfiniteScroll from "react-infinite-scroll-component";
import {ButtonRemove} from "./ButtonRemove";

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
type Props = { list: InterviewQuestionPaged, onPageChange: any, count: number, removeAction: (id: string) => void, isAuth: boolean };

export const InterviewQuestionList: React.FC<Props> = ({list, onPageChange, count, isAuth, removeAction}) => {

    const classes = useStyles();
    return (
        <Grid container style={{justifyContent: 'center'}}>
            <div style={{flexBasis: '100%'}}>
                <InfiniteScroll
                    dataLength={list.data.length}
                    next={onPageChange}
                    hasMore={list.data.length == count}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{textAlign: "center"}}>
                            <b>Всё :(</b>
                        </p>
                    }
                    className={classes.infinityScroll}
                >
                    {
                        list?.data?.map(({id, question, answer, tags}) => {
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
                                                {
                                                    isAuth && <ButtonRemove action={() => removeAction(id)}/>
                                                }
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