import { configureStore } from "@reduxjs/toolkit";
import overallReducer from "./features/overall/OverallSlice";

export const store = configureStore({
    reducer: {
        overall: overallReducer
    },
})