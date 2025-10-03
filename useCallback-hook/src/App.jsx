import React from 'react'
import { useState } from 'react'
import Child from './Child'

const App = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const sayHi = useCallback(()=>{
    console.log("hii")
  },[])

  return (
    <>
    <div>
      <p>Value of count1 :{count1}</p>
      <button onClick={()=>setCount1(count1+1)}>Increase</button>
    </div>
    <br></br>
    <br></br>

    <div>
      <p>Value of count2 :{count1}</p>
      <button onClick={()=>setCount2(count2+1)}>Increase</button>
    </div>
    <br></br>
    <br></br>

    <Child /> 
    </>
  )
}

export default App
