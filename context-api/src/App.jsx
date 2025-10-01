import React from 'react'
import { createContext } from 'react'
import Card1 from './Child1'

export const dataDistributor = createContext();

const App = () => {
  let data = {
    fname:"sandeep",
    lname:"sharma"
  }
  return (
    <div>
      <dataDistributor.Provider value = {data}>
      <>
      <Card1 />
      </>
      </dataDistributor.Provider>
    </div>
  )
}

export default App
