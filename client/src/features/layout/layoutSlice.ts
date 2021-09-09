import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Layout} from "../../models/Layout";

const initialState: Layout = {
  isShowFilters: true
};

const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setIsShowFilters(state, {payload}: PayloadAction<Layout>) {
            state.isShowFilters = payload.isShowFilters
        },
    },
});
export const {
    setIsShowFilters,
} = layoutSlice.actions;

export default layoutSlice.reducer;
