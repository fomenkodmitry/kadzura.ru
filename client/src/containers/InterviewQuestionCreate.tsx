﻿import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import {InterviewQuestionCreateForm} from "../components/InterviewQuestionCreateForm";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        createForm: {
            paddingTop: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    }),
);

export const InterviewQuestionCreate = () => {
    const classes = useStyles();

    return (
        <div className={classes.createForm}>
            <Paper>
                <InterviewQuestionCreateForm/>
            </Paper>
        </div>
    );
};