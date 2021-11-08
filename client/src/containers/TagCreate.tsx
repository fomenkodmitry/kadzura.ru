import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import {TagCreateForm} from "../components/TagCreateForm";
import {useAuth} from "../hooks/useAuth";
import {useDispatch} from "react-redux";
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

export const TagCreate = () => {
    const isAuth = useAuth();
    const history = useHistory();
    if(!isAuth)
        history.push('/admin/login')

    const classes = useStyles();

    const dispatch = useDispatch();

    return (
        <div className={classes.createForm}>
            <Paper>
                <TagCreateForm dispatch={dispatch}/>
            </Paper>
        </div>
    );
};