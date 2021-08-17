import React, {FC} from 'react';
import {useTitle} from "react-use";
import {InterviewQuestionCreate} from "../containers/InterviewQuestionCreate";

const PageAdminInterviewQuestionCreate: FC = () => {
    useTitle('Добавление вопроса')

    return (
        <InterviewQuestionCreate/>
    )
}
export default PageAdminInterviewQuestionCreate;