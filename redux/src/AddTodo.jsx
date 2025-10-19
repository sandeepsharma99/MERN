import React from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from "./reducer/todoSlice.js"
import { useState } from 'react'

const  AddTodo = ()=> {
    const [inputText,setInputText] = useState("");
    const dispatch  =  useDispatch();

    const HandleClick = (e)=>{
        e.prebentDefault()
        dispatch(addTodo({text:inputText}))
    }
  return (
    <>
      <input type="text" placeholder='Enter Task..' value={inputText} onChange={ (e)=>{
        setInputText(e.target.value )
      }} />
      <button onClick={HandleClick}>AddToDo</button>
    </>
  )
}

export default AddTodo
