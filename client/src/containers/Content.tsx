import React, {FC, useEffect} from "react";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import {createStyles, makeStyles, Theme, useTheme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {useDispatch} from "react-redux";
import {changeMobileIsOpen} from "../features/mobile/mobileIsOpenSlice";
import {useNamedSelector} from "../hooks/useNamedSelector";
import mobileIsOpen from "../features/mobile/mobileIsOpenSlice";
import {contacts} from "../dataset/contacts";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

export const Content: FC = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Typography paragraph>
                жопа
            </Typography>
        </main>
    )
}