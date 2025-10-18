import React from 'react'
import { useState } from 'react';

const App = () => {
 const [count,setCount] =useState(0)
  // function clickHandler(){
  //   console.log("button clicked")
  function increment(){
    setCount(count+1)
    console.log(count)
  }
  return (
    <div>
      <p>value of a : {count}</p>
      {/* <button  onClick={clickHandler}>button</button> {clickhandler} is just reference of the function and we define function above return obviously} */}
      <button onClick={increment}>click</button>
    </div>
  )
  }


export default App
