import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Auth} from "../../models/Login";

const initialState: Auth = {
    isLogin: !!localStorage.getItem('token')
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth(state, {payload}: PayloadAction<boolean>) {
            state.isLogin = payload
        },
    },
});
export const {
    setIsAuth,
} = authSlice.actions;

export default authSlice.reducer;
