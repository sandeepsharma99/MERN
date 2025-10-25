import React from 'react'
import AddTodo from './component/AddTodo'
import ViewTodo from './component/ViewTodo'

const App = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Redux To-Do App</h1>
      <AddTodo />
      <ViewTodo />
    </div>
  )
}

export default App
