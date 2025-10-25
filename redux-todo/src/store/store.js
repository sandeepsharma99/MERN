import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducer/TodoSlice";

const store = configureStore({
    reducer:{
        todos:todoReducer,
    }
})

export default store;