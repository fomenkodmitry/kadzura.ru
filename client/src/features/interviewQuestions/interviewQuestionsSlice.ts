import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InterviewQuestionPaged} from "../../models/InterviewQuestion";

const initialState: InterviewQuestionPaged = {
    data: [],
    totalCount: 1
};

const interviewQuestionsSlice = createSlice({
    name: 'interviewQuestions',
    initialState,
    reducers: {
        setInterviewQuestions(state, {payload}: PayloadAction<InterviewQuestionPaged>) {
            state.data = payload.data;
            state.totalCount = payload.totalCount;
        },
    },
});
export const {
    setInterviewQuestions
} = interviewQuestionsSlice.actions;

export default interviewQuestionsSlice.reducer;
