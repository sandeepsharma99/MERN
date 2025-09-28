import React from 'react'
import { useState } from 'react'
import Card from './Card';

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <Card setName={setName} name = {name}/>
      <p>value of Parent : {name}</p>
    </div>
  )
}

export default App
