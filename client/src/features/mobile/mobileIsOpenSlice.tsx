import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Mobile} from "../../models/Mobile";

const initialState: Mobile = {
    isOpen: false
};

const navBarMobileIsOpenSlice = createSlice({
    name: 'navBarMobileIsOpen',
    initialState,
    reducers: {
        changeNavbarMobileIsOpen(state,) {
            state.isOpen = !state.isOpen;
        },
        setNavbarMobileIsOpen(state, {payload}: PayloadAction<Mobile>) {
            state.isOpen = payload.isOpen;
        },
    },
});

export const {
    changeNavbarMobileIsOpen,
    setNavbarMobileIsOpen
} = navBarMobileIsOpenSlice.actions;

export default navBarMobileIsOpenSlice.reducer;
