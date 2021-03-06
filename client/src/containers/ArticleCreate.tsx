import React, {useEffect} from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import {ArticleCreateForm} from "../components/ArticleCreateForm";
import {useDispatch} from "react-redux";
import {useNamedSelector} from "../hooks/useNamedSelector";
import {thunkGetTags} from "../features/tags/thunkGetTags";
import {useAuth} from "../hooks/useAuth";
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

export const ArticleCreate = () => {
    const isAuth = useAuth();
    const history = useHistory();
    if(!isAuth)
        history.push('/admin/login')

    const classes = useStyles();
    const dispatch = useDispatch();
    
    const tags = useNamedSelector('tags')
    
    useEffect(() => {
        dispatch(thunkGetTags())
    }, [dispatch])
    
    return (
        <div className={classes.createForm}>
            <Paper>
                <ArticleCreateForm tags={tags} dispatch={dispatch}/>
            </Paper>
        </div>
    );
};