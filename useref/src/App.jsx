// import React from 'react'
// import { useState, useEffect } from 'react'


// const App = () => {
//   const [count, setCount] = useState(0)
//   useEffect(()=>{
//     if(count === 0){
//       console.log("component did mount")
//     }else if(count===2){
//       console.log("component did  update")
//     }
//     return function(){
//       if(count ===3){
//         console.log("component did unmiount")
//       }
//     }
//   },[count])

//   return (
//     <div>
//       <p>Count : {count}</p>
      
//       <button onClick={()=>setCount(count+1)}>increase</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { useState, useEffect } from 'react'


// const App = () => {
//   const [count, setCount] = useState(0)
//   useEffect(()=>{
//     fetch("").then((data)=>res.json).then((data)=>{})
//   },[count])
  
//   return (
//     <div>
//       <p>Count : {count}</p>
      
//       <button onClick={()=>setCount(count+1)}>increase</button>
//     </div>
//   )
// }

// export default App

// <--! -->

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [count, setCount] = useState(0)
//   const function clickHandle(){
//     setCount(
//       count+1
//     )
//   }
//   return (
//     <div>
//       <p>Count : {count}</p>
//       <button onClick={clickHandle}>Increase</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { useState,useRef } from 'react'

// const App = () => {
//   const [count, setCount] = useState(0)
//   const ref = useRef()
//   if(!ref.current){
//     return null
//   }else{
//     ref.current.style.innerText = "sharma"
//   }
  
//   // const [ref, setRef] = useState(0)
//   const increase = ()=>{
//     setCount(count+1)
//     // setRef(ref+1)
//     // console.log(ref)
//     //  ref.current = ref.current+1
//     // console.log(ref.current)
//   }
//   return (
//     <div>
//       <p>Count : {count}</p>
//       <h1 ref = {ref}>sandeep</h1>
//       {console.log(ref.current)}    
//       {ref.current.style.backgroundColor = "green"} 
//       {/* {(ref.current.style.backgroundColor = "red")} 
//       {(ref.current.style.innerText = "sharma")} */}

//       <button onClick={increase}>increase</button>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { useState, useRef,useEffect } from 'react'// we use useEffect to solve useref problem 

const App = () => {
  const [count,setCount] = useState(0)
  const ref = useRef()

    useEffect(()=>{
      if(!ref.current){
      return null
    }else{
      ref.current.style.backgroundColor = "blue"
      ref.current.style.innerText = "sharma"
    }
    },[count])

  function clickHandle(){
    setCount(
      count+1
    )
    
    // ref.current = ref.current+1
    // console.log(ref.current)
   
  }
  return (
    <div>
      <h1 ref = {ref}>Sandeep</h1>
      {/* {console.log(ref.current)} */}
      
      <p>value of Count : {count}</p>
      <button onClick={clickHandle}>increase</button>
    </div>
  )
}

export default App
