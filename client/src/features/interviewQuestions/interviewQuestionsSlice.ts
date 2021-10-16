import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InterviewQuestionPaged} from "../../models/InterviewQuestion";

const initialState: InterviewQuestionPaged = {
    data: [],
    totalCount: 0,
};

const interviewQuestionsSlice = createSlice({
    name: 'interviewQuestions',
    initialState,
    reducers: {
        setInterviewQuestions(state, {payload}: PayloadAction<InterviewQuestionPaged>) {
            state.data = [...state.data, ...payload.data];
            state.totalCount = payload.totalCount;
        },
        clearInterviewQuestions(state) {
            state.data = []
            state.totalCount = 0
        },
    },
});
export const {
    setInterviewQuestions,
    clearInterviewQuestions
} = interviewQuestionsSlice.actions;

export default interviewQuestionsSlice.reducer;
