import React, {FC} from 'react';
import {useTitle} from "react-use";
import {InterviewQuestions} from "../containers/InterviewQuestions";

const PageInterviewQuestions: FC = () => {
    useTitle("Вопросы на собеседования")

    return (
        <InterviewQuestions/>
    )
}
export default PageInterviewQuestions;