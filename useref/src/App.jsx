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

import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const function clickHandle(){
    setCount(
      count+1
    )
  }
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={clickHandle}>Increase</button>
    </div>
  )
}

export default App
