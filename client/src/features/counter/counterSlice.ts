import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface TestCounter {
    count: number;
}

const initialState: TestCounter = {
    count: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCount(state, {payload}: PayloadAction<number>) {
            state.count = payload;
        },
        addCount(state, {payload}: PayloadAction<number>) {
            state.count += payload;
        },
    },
});

export const {
    setCount,
    addCount,
} = counterSlice.actions;

export default counterSlice.reducer;
