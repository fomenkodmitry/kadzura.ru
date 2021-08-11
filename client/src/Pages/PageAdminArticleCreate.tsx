﻿import React, {FC} from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: theme.mixins.toolbar,
    }),
);

const PageAdminArticleCreate: FC = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.toolbar}/>
            <Typography paragraph>
                Добавление статьи!
            </Typography>
        </div>
    )
}
export default PageAdminArticleCreate;