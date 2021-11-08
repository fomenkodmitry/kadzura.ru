import React from "react";
import {useAuth} from "../hooks/useAuth";
import {useHistory} from "react-router-dom";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Fab} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {CloudDownloadSharp} from "@material-ui/icons";
import {InterviewQuestionPaged} from "../models/InterviewQuestion";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fabCreate: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
        fabDownload: {
            position: 'fixed',
            bottom: theme.spacing(10),
            right: theme.spacing(2),
        },
    }),
);

type Props = { createUrl: string };
export const Fabs : React.FC<Props> = ({createUrl})  => {
    const isAuth = useAuth();
    const history = useHistory();

    const classes = useStyles();

    return (
        <>
            {
                isAuth &&
                <>
                    <Fab color="inherit" aria-label="add" className={classes.fabDownload}
                         onClick={() => alert()}>
                        <CloudDownloadSharp/>
                    </Fab>
                    <Fab color="secondary" aria-label="add" className={classes.fabCreate}
                         onClick={() => history.push(createUrl)}>
                        <AddIcon/>
                    </Fab>
                </>
            }
        </>
    ); 
}