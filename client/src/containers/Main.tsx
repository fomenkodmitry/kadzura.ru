import React, {FC} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: theme.mixins.toolbar,
    }),
);

export const Main: FC = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.toolbar}/>
            <Typography paragraph>аавфыафывавыа
                жопавываыафвыафывафывафывафвыа
            </Typography>
        </div>
    )
}