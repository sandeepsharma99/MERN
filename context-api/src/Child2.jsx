import React from 'react'
import {useContext} from "react"
import { dataDistributor } from './App'

const Child2 = () => {
    const data = useContext(dataDistributor)
    console.log(data)
  return (
    <div>
        {data.fname}
        {data.lname}
      
    </div>
  )
}

export default Child2
