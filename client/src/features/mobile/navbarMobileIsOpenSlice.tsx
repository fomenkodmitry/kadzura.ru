import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Mobile} from "../../models/Mobile";

const initialState: Mobile = {
    isOpen: false
};

const navbarMobileIsOpenSlice = createSlice({
    name: 'navbarMobileIsOpen',
    initialState,
    reducers: {
        changeNavbarMobileIsOpen(state) {
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
} = navbarMobileIsOpenSlice.actions;

export default navbarMobileIsOpenSlice.reducer;
