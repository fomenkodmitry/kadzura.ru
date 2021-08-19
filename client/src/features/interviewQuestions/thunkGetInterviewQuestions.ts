import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchQuestionAnswerThunk = createAsyncThunk(
    'QuestionAnswer',
    async (filter : QuestionFilterType) => {
        return (await response.json()) as QuestionAnswerTypeList
    }
)

