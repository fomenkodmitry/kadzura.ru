import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SelectorTag} from "../../models/Tag";

const initialState: SelectorTag = {
    data: []
}

const tagsSelectorSlice = createSlice({
    name: 'tagsSelector',
    initialState,
    reducers: {
        setSelectorTags(state, {payload}: PayloadAction<SelectorTag>) {
            state.data = payload.data;
        },
    },
});
export const {
    setSelectorTags
} = tagsSelectorSlice.actions;

export default tagsSelectorSlice.reducer;
