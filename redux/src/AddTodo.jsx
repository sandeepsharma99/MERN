import React from 'react'
import { addTodo } from './reducer/TodoSlice.js'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const AddTodo = () => {
  const [inputText,setInputText] = useState("")
  const dispatch = useDispatch();
  const handleClick = (e)=>{
    e.preventDefault();
    if(inputText=="")return;
    dispatch(addTodo({text:inputText}));
  }
  return (
    <div>
      <input
       type="text"
       placeholder='enter you task'
       value={inputText}
       onChange={(e)=>{setInputText(e.target.value)}}/>
       <button onClick={handleClick}>AddTodo</button>
    </div>
    
  )
}

export default AddTodo




// import React from 'react'
// import { useDispatch } from 'react-redux'
// import {addTodo} from "./reducer/todoSlice.js"
// import { useState } from 'react'

// const  AddTodo = ()=> {
//     const [inputText,setInputText] = useState("");
//     const dispatch  =  useDispatch();

//     const HandleClick = (e)=>{
//         e.prebentDefault()
//         dispatch(addTodo({text:inputText}))
//     }
//   return (
//     <>
//       <input type="text" placeholder='Enter Task..' value={inputText} onChange={ (e)=>{
//         setInputText(e.target.value )
//       }} />
//       <button onClick={HandleClick}>AddToDo</button>
//     </>
//   )
// }

// export default AddTodo
