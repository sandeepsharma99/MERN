import React ,{useState} from 'react'

const App = () => {
  const [count1,setCount1] = useState(0)
  const [count2,setCount2] = useState(0)
  return (
    <>
    
    <div>
      <p>Value of Counter1 : {count1}</p>
      <button onClick={()=>setCount1(count1+1)}>Increase</button>
    </div>
    <br></br>
    <br></br>
    <div>
      <p>Value of Counter2: {count2}</p>
      <button onClick={()=>setCount2(count2+1)}>Increase</button>

      <br></br>
      <br></br>
      
    </div>
    </>
  )
}

export default App
