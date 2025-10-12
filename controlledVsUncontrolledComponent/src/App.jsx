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


/* Uncontrolled component */
/* In uncontrolled component we uses useref to access the element or to manipulate   */

import React from 'react'
import { useRef } from 'react'

const App = () => {
  const ref = useRef()
  const handleSubmit = (e)=>{
    e.preventDefault()  // ?
    alert(`you name is ${ref.current.value}`)
  }
  return (
    <div> 
      <form action="" onSubmit={handleSubmit}> 
        <fieldset>
          <label htmlFor="">Name</label>
          <input type="text" name="" id="" ref={ref} />
          <button>button</button>
        </fieldset>
      </form>
    </div>
  )
}

export default App


/* controlled component */
/* commit */
/* commit 1 */
/* commit 2 */
/* commit 3 */
/* commit 4 */
/* commit 5 */
/* commit 6 */
/* commit 7 */
/* commit 8 */
/* commit 9 */
