import React from 'react'
import { useState } from 'react'

const Card1 = () => {
  const [count ,setCount] = useState(0)
  function handleClick(){
    setCount(count+1)
  }
  return (
    <div>
      <p>count : {count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Card1