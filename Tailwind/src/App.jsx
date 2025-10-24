import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    < >
    <div className='grid grid-cols-3 gap-4 place-items-center'>
      <Card flowerName = 'sandeep'/>
      <Card flowerName = 'sharma'/>
      <Card flowerName = 'sandeep'/>
    </div>
      
    </>
  )
}

export default App
