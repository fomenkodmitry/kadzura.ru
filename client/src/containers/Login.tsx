import React from 'react';
import * as yup from 'yup';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import {LoginFom} from "../components/LoginForm";

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

const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required'),
});

export const Login = () => {
    const classes = useStyles();

    return (
        <div className={classes.loginForm}>
            <Paper>
                <LoginFom/>
            </Paper>
        </div>
    );
};