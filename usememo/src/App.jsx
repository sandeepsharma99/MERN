// import React from 'react'
// import { useMemo } from 'react';
// import { useState } from 'react';


// const App = () => {
//   const [count,setCount]=useState(0)
  
//   function sum(){
//     console.log("i'm heavy task done by me")
//     let sum = 0;
//     for(let i=0;i<1000000000;i++){
//       sum = sum+i;
//     }
//     return sum;
//   }
//   const res = useMemo(sum,[])
//   return (
//     <div>
//       <p>result of heavy Computation : {res}</p>
//       count : {count}<br></br>
//       <button onClick={()=>{setCount(count+1)}}>Increase</button>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { useState,useMemo } from 'react'


const App = () => {
  const [count,setCount] = useState(0);
  
    function sum (){
      console.log("i'm performing haevy Task")
    let sum = 0
    for(let i = 0; i<=100000000;i++){
      sum = sum+i
    }
    return sum;
  }

  // const res = sum()  
  const res = useMemo(sum,[])
  
  return (
    <div>
      <p>result of heavy Computation : {res}</p>
      count : {count}<br></br>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

export default App
