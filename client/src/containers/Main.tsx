import React, {FC} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {MainPosts} from "./MainPosts";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    }),
);

export const Main: FC = () => {
    const classes = useStyles();

    return (
        <MainPosts/>
    )
}