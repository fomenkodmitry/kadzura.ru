import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Search} from "../../models/Search";

const initialState: Search = {
    text: ""
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch(state, {payload}: PayloadAction<Search>) {
            state.text = payload.text;
        },
    },
});
export const {
    setSearch
} = searchSlice.actions;

export default searchSlice.reducer;
