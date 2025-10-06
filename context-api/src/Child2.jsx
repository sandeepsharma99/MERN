/* Now we;ll use the context(person) simply by inporting Distributor(person) and importing {UseContext} method */

// import React from 'react'

// import {useContext} from 'react'

// import {Distributor} from './App'

// const Child2 = () => {
//   const data = useContext(Distributor);
//   console.log(data);
//   return (
//     <div>
//       {data.fname}
//       {data.lname}
      
//     </div>
//   )
// }

// export default Child2

import React from 'react'
import { useContext } from 'react'
import { dataDistributor } from './App'



const Child2 = () => {
  let data = useContext(dataDistributor)
  return (
    <div>
      {data.fname}<br></br>
      {data.lname}
    </div>
  )
}

export default Child2



// import React from 'react'
// import { useContext } from 'react'
// import {Distributor} from "./App"
// const Child2 = () => {
//   const data = useContext(Distributor)
//   return (
//     <div>
//       {data.fname}
//       {data.lname}
//     </div>
//   )
// }

// export default Child2



// import React from 'react'
// import {useContext} from "react"
// import { dataDistributor } from './App'

// const Child2 = () => {
//     const data = useContext(dataDistributor)
//     console.log(data)
//   return (
//     <div>
//         {data.fname}
//         {data.lname}
      
//     </div>
//   )
// }

// export default Child2
