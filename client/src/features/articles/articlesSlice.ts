import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ArticlePaged} from "../../models/Article";

const initialState: ArticlePaged = {
    data: [],
    totalCount: 0
};

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setArticle(state, {payload}: PayloadAction<ArticlePaged>) {
            state.data = [...state.data, ...payload.data];
            state.totalCount = payload.totalCount;
        },
        clearArticle(state) {
            state.data = []
            state.totalCount = 0
        }
    },
});
export const {
    setArticle,
    clearArticle
} = articlesSlice.actions;

export default articlesSlice.reducer;
