import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ArticlePaged} from "../../models/Article";

const initialState: ArticlePaged = {
    data: [],
    totalCount: 0,
    totalPage: 1
};

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setArticle(state, {payload}: PayloadAction<ArticlePaged>) {
            state.data = [...state.data, ...payload.data];
            state.totalCount = payload.totalCount;
            state.totalPage = payload.totalPage
        },
        clearArticle(state) {
            state.data = []
            state.totalCount = 0
            state.totalPage = 1
        }
    },
});
export const {
    setArticle,
    clearArticle
} = articlesSlice.actions;

export default articlesSlice.reducer;
