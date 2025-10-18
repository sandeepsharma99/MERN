import React from 'react'

const Card3 = ({data}) => {
    console.log(data)
  return (
    <div>
      <h1>Name -  {data.myname}</h1>
      <p>age - {data.age}</p>
    </div>
  )
}

export default Card3
