import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Search} from "../../models/Search";

const params = new URLSearchParams(window.location.search)

const initialState: Search = {
    text: params.get("q")
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch(state, {payload}: PayloadAction<Search>) {
            state.text = payload.text;
        },
        clearSearch(state) {
            state.text = undefined;
        },
    },
});
export const {
    setSearch,
    clearSearch
} = searchSlice.actions;

export default searchSlice.reducer;
