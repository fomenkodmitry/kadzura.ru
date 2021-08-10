import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Mobile} from "../../models/Mobile";

const initialState: Mobile = {
    isOpen: false
};

const mobileIsOpenSlice = createSlice({
    name: 'mobileIsOpen',
    initialState,
    reducers: {
        changeMobileIsOpen(state,) {
            console.log(222222222222)
            state.isOpen = !state.isOpen;
        },
        setMobileIsOpen(state, {payload}: PayloadAction<Mobile>) {
            console.log(222222222222)
            state.isOpen = payload.isOpen;
        },
    },
});

export const {
    changeMobileIsOpen,
    setMobileIsOpen
} = mobileIsOpenSlice.actions;

export default mobileIsOpenSlice.reducer;
