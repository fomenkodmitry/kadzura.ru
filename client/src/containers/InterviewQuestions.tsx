import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";

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

export const InterviewQuestions: React.FC = () => {

    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12} key={"1"}>
                <div className={classes.containerItem}>
                    <Accordion className={classes.accordionItem}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography className={classes.heading}>
                                вопрос
                                <span className={classes.tags}> | Tags: {
                                    "тэги"
                                }</span>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.details}
                                          dangerouslySetInnerHTML={{__html: "<b>ответ</b>"}}>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </Grid>
            <Grid item xs={12} key={"2"}>
                <div className={classes.containerItem}>
                    <Accordion className={classes.accordionItem}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography className={classes.heading}>
                                вопрос
                                <span className={classes.tags}> | Tags: {
                                    "тэги"
                                }</span>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.details}
                                          dangerouslySetInnerHTML={{__html: "<b>ответ</b>"}}>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </Grid>
        </Grid>
    );
}