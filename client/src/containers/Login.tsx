import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import {LoginForm} from "../components/LoginForm";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        loginForm: {
            padding: '10%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
    }),
);

export const Login = () => {
    const classes = useStyles();

    return (
        <div className={classes.loginForm}>
            <Paper>
                <LoginForm/>
            </Paper>
        </div>
    );
};