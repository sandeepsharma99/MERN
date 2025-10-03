
import React from 'react'
import Custom from './Custom'

const App = () => {
  const [data] = Custom("https://dummyjson.com/products")
  return (
    <div>
      {data && data.products.map((products)=>{
        return <p>{products.title}</p>
      })}
    </div>
  )
}

export default App
