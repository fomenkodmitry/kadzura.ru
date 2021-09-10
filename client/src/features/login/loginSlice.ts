import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type Auth = {
    isAuth : boolean
}
const initialState: Auth = {} as Auth;

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth(state, {payload}: PayloadAction<boolean>) {
            state.isAuth = payload
        },
    },
});
export const {
    setIsAuth,
} = authSlice.actions;

export default authSlice.reducer;
