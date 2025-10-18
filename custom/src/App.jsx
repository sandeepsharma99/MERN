
// // import React from 'react'
// // import Custom from './Custom'

// // const App = () => {
// //   const [data] = Custom("https://dummyjson.com/products")
// //   return (
// //     <div>
// //       {data && data.products.map((products)=>{
// //         return <p>{products.title}</p>
// //       })}
// //     </div>
// //   )
// // }

// export default App

// import React from 'react'
// import Custom from "./Custom"

// const App = () => {

//   const [data]=Custom("https://dummyjson.com/products")
//   console.log(data)
//   return (
//     <>
//       {data && data.products.map((products)=>{return <>
//       <p key ={products.id}>{products.title}</p>
//       <p key ={products.id}>{products.price}</p>
//       <p key ={products.id}>{products.rating}</p>
//       </>})}
//     </>
//   )
// }

// export default App


import React from 'react'
import Custom from './Custom'

const App = () => {
  const [data] = Custom("https://dummyjson.com/products")
  console.log(data)
  return (
    <>
      {data && data.products.map((products)=>{return<>
      <p key = {products.id}>{products.title}</p>
      <div key = {products.id}>{products.images}</div>
      </>})}
    </>
  )
}

export default App



