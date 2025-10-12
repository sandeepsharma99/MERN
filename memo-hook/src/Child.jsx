/* React.memo() */

// import React from 'react'


// const Child = React.memo((props) => {
//     console.log("child rendering again")
//   return (

//     <div>
//       value of Counter2 :{props.count2}
//     </div>
//   )
// })

// export default Child

/* alternate way memo hook */

import React from 'react'
import { memo } from 'react'


const Child = ((props) => {
    console.log("child rendering again")
  return (

    <div>
      value of Counter2 :{props.count2}
    </div>
  )
})

export default memo(Child)
