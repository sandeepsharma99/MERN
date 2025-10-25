import { createSlice, nanoid} from "@reduxjs/toolkit";



const todoSlice = createSlice({
    name:"todos",
    initialState:[],
    reducer:{
        addTodo:(state,action)=>{
            state.push({id:nanoid(),text:action.payload.text})
        },
        removeTodo:(state,action)=>{
            return state.filter(todo=>todo.id !==action.payload.id);
        },
    },
});

export const {addTodo, removeTodo}  = todoSlice.actions;
export default todoSlice.reducer;