import React, {FC} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {MainPosts} from "./MainPosts";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: theme.mixins.toolbar,
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        listItem: {
            width: '70%',
        },
        divider: {
            width: '70%'
        }
    }),
);

export const Main: FC = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.toolbar}/>
            <MainPosts/>
        </div>
    )
}