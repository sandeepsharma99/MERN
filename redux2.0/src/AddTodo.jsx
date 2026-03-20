// import React from 'react'
// import { useState } from 'react'
// import {useDispatch} from "react-redux";
// import { addTodo } from './reducer/TodoSlice.js'

// const AddTodo = () => {

//     const [inputText, setInputText] = useState('');
//     const dispatch = useDispatch();

//     const handleClick=(e)=>{
//         e.preventDefault();
//         if(inputText == "")return;
//         dispatch(addTodo({text:inputText}))
//     }

//   return (
//     <div>
//         <input type="text" placeholder='enter Task...' value={inputText} onChange={(e)=>{
//             setInputText(e.target.value)
//         }}/>
//         <button onClick={handleClick}>Addtodo</button>
//     </div>
//   )
// }

// export default AddTodo

import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./reducer/TodoSlice.js";

const AddTodo = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (inputText == "") return;
    dispatch(addTodo({ text: inputText }));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter task... "
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></input>

      <button onClick={handleClick}>AddTodo</button>
    </div>
  );
};

export default AddTodo;