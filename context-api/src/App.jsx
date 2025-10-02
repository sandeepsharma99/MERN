import React from 'react'
import Child1 from './Child1'
import { createContext } from 'react';

// export const Distributor = createContext();
export const Distributor = createContext();

const App=()=>{
  let data = {
    fname:"sandeep",
    lname:"sharma"
  }
return(
    <Distributor.Provider value={data}>
      <Child1/>
    </Distributor.Provider>
)}

export default App



// import React from 'react'
// import { createContext } from 'react'
// import Child1 from './Child1'

// export const dataDistributor = createContext();

// const App = () => {
//   let data = {
//     fname:"sandeep",
//     lname:"sharma"
//   }
//   return (
//     <div>
//       <dataDistributor.Provider value = {data}>
//       <>
//       <Child1 />
//       </>
//       </dataDistributor.Provider>
//     </div>
//   )
// }

// export default App

/* context api is use to send data directly to traget child component 
    In context api we create a person(context) by import createContext and name distributor and consume it in target Child by importing useContect and distributor(the person)

*/
