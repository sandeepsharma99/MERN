import React from 'react'

const Card = (pops) => {
  return (
    <div>
        <p>Name : {pops.name}</p>
        <p>Email :{pops.email}</p>
        <p>phone : {pops.phone}</p>
    </div>
  )
}

export default Card