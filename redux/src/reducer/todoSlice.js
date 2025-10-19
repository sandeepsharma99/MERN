import {createSlice,nanoid} from "@reduxjs/toolkit"

const todoSlice  = createSlice({
    name:"todos",
    initialState:[],
    reducer:{
        addTodo:(state,action)=>{
        const newTodo = {
            id:nanoid(),
            text: action.payload.text,
            compelet:false,
        }
    state.push(newTodo);
    }   
    },
})  

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;