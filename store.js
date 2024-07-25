import { configureStore } from "@reduxjs/toolkit";
import dessertReduser from "./src/futures/dessertSlice"

export const store = configureStore({
    reducer: {
        orders: dessertReduser,
    },
})