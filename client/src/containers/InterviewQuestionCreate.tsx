﻿import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import {InterviewQuestionCreateForm} from "../components/InterviewQuestionCreateForm";
import {useAuth} from "../hooks/useAuth";
import {useDispatch} from "react-redux";
import {useNamedSelector} from "../hooks/useNamedSelector";
import {useHistory} from "react-router-dom";

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
    const isAuth = useAuth();
    const history = useHistory();
    if(!isAuth)
        history.push('/admin/login')
    
    const classes = useStyles();

    const dispatch = useDispatch();
    const tags = useNamedSelector('tags')
    
    return (
        <div className={classes.createForm}>
            <Paper>
                <InterviewQuestionCreateForm dispatch={dispatch} tags={tags}/>
            </Paper>
        </div>
    );
};