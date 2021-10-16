import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TagPaged} from "../../models/Tag";

const initialState: TagPaged = {
    data: [],
    totalCount: 0
};

const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {
        setTags(state, {payload}: PayloadAction<TagPaged>) {
            state.data = payload.data;
            state.totalCount = payload.totalCount;
        },
    },
});
export const {
    setTags
} = tagsSlice.actions;

export default tagsSlice.reducer;
