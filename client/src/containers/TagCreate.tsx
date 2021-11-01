import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import {TagCreateForm} from "../components/TagCreateForm";
import {useAuth} from "../hooks/useAuth";
import {useDispatch} from "react-redux";

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
    useAuth();

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