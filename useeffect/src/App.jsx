/* useEffect is a Fundamental Hook That allow to perform sideEffect untill actual dom printed 

# Purpose of useEffect:
# How useEffect works:
# Why 
*/

import React from 'react'
import { useState,useEffect } from 'react'

const App = () => {
  const [count,setCount] = useState(0)
  useEffect(()=>{
    console.log("hii")
  },[count])
  return (
    <div>
      <p>value of : {count}</p>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

export default App

