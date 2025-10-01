import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const ref = useRef(0)
  console.log(ref.current)
  const clickHandle = ()=>{
    setCount(
      count+1
    )
    ref.current =ref.current+1
    console.log(ref.current)

  }
  return (
    <div>
      <p>Value of count : {count}</p>
      <button onClick={clickHandle}>Increase</button>
    </div>
  )
}

export default App
