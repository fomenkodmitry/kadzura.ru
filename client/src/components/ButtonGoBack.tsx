import React from "react";
import {useAuth} from "../hooks/useAuth";
import {useHistory} from "react-router-dom";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Button, Fab} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {CloudDownloadSharp} from "@material-ui/icons";
import {InterviewQuestionPaged} from "../models/InterviewQuestion";
import {thunkGetDump} from "../features/dump/thunkGetDump";
import {useDispatch} from "react-redux";

type Props = { className: string, fullWidth?: boolean }
export const ButtonGoBack : React.FC<Props> = ({className, fullWidth})  => {
    const history = useHistory();

    return (
        <Button onClick={() => history.goBack()} className={className} fullWidth>НАЗАД</Button>
    );
}