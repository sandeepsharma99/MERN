// /* Controlled component : we use useState in control Component */

// import React, { useState } from 'react'

// const App = () => {
//   const [name,setName ] = useState("")
//   function handleChange(e){
//     setName(e.target.value)
//   }
//   return (
//     <div>
//       <p>Name : {name}</p>
//       <form action="">
//         <fieldset>
//         <label htmlFor="">name : </label>
//         <input type="text" onChange={handleChange} />
//         </fieldset>
//       </form>
//     </div>
//   )
// }

// export default App

import React, { useRef } from 'react'


const App = () => {
  const ref = useRef()
  const  handleSubmit = (e)=>{
    e.preventDefault()
    alert(`you've typed ${ref.current.value}`) 
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="">Text : </label>
          <input type="text" ref ={ref} />
          <button>submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default App

/* controlled component */
/* commit */
import React, { useRef } from 'react'


const App = () => {
  const ref = useRef()
  const  handleSubmit = (e)=>{
    e.preventDefault()
    alert(`you've typed ${ref.current.value}`) 
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="">Text : </label>
          <input type="text" ref ={ref} />
          <button>submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default App
/* commit 1 */
/* commit 2 */
/* commit 3 */
/* commit 4 */
/* commit 5 */
/* commit 6 */
/* commit 7 */
/* commit 8 */
/* commit 9 */
