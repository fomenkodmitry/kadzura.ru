import { configureStore } from '@reduxjs/toolkit'
import reducer from "./Reducer";

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware: () => any) => getDefaultMiddleware(),
})