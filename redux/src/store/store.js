import {configureStore} from "react-redux"
import todoSlice from "../reducer/todoSlice"

export const store = configureStore({
    reducer:{
        todos: todoSlice
    }
})
export default store