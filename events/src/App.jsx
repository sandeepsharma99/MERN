
import React from 'react'
import {useState} from "react"
import Card1 from './Card1'
import Card2 from './Card2'

const App = () => {
  const [count,setcount] = useState(0)
  function handleClick(){
    setcount(count+1)
    console.log(count)
  }

  // function handleClick(){
  //   console.log("Button clicked")
  // }


  return (
    // <button onClick={handleClick}>Click me</button>
    <>
    <p>value of a : {count}</p>
    <button onClick = {handleClick}>Click me</button>
    <Card1/>
    <Card2/>
    </>
  )
}

export default App