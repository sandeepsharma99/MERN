// import React from 'react'
// import Card1 from './Card1'

// const App = () => {
//   return (
//     <div>
//       <Card1 name="sandeep" age="25" salary="123456"/>
//       <Card1 name="sandeep" age="25" salary="123456"/>
//     </div>
//   )
// }

// export default App

/* Props drilling problem */

import React from 'react'
import Card1 from './Card1'

const App = () => {
  let data = {
    myname : "sandeep",
    age : "25"
  }
  return (
    <div>
      <Card1 data={data}/>
    </div>
  )
}

export default App

