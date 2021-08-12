﻿import React, {FC} from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useTitle} from "react-use";
import {InterviewQuestions} from "../containers/InterviewQuestions";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: theme.mixins.toolbar,
    }),
);

const PageInterviewQuestions: FC = () => {
    const classes = useStyles();
    useTitle("Вопросы для собеседования")

    return (
        <div>
            <div className={classes.toolbar}/>
            <InterviewQuestions/>
        </div>
    )
}
export default PageInterviewQuestions;