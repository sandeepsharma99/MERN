import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from '../reducer/TodoSlice.js';

export const store = configureStore({
    reducer:{
        todos: TodoSlice,
    }
})

export default store;