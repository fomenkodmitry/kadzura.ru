import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InterviewQuestion, InterviewQuestionPaged} from "../../models/InterviewQuestion";


const initialState: InterviewQuestionPaged = {
    Data: [],
    TotalCount: 1
};

const interviewQuestionsSlice = createSlice({
    name: 'interviewQuestions',
    initialState,
    reducers: {
        setInterviewQuestions(state, {payload}: PayloadAction<InterviewQuestionPaged>) {
            state.Data = payload.Data;
            state.TotalCount = payload.TotalCount;
        },
    },
});

export default interviewQuestionsSlice.reducer;
