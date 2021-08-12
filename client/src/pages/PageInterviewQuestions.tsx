import React, {FC} from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useTitle} from "react-use";
import {InterviewQuestions} from "../containers/InterviewQuestions";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    }),
);

const PageInterviewQuestions: FC = () => {
    const classes = useStyles();
    useTitle("Вопросы для собеседования")

    return (
        <InterviewQuestions/>
    )
}
export default PageInterviewQuestions;