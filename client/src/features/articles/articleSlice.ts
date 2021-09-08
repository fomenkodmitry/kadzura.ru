import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Article, ArticlePaged} from "../../models/Article";
import {Tag} from "../../models/Tag";

type State = {
    data : Article
}
const initialState: State = {} as State;

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        setArticle(state, {payload}: PayloadAction<Article>) {
            state.data = payload
        },
    },
});
export const {
    setArticle,
} = articleSlice.actions;

export default articleSlice.reducer;
