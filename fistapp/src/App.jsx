import React from 'react'

const App = () => {
  // function clickHandler(){
  //   console.log("button clicked")
  let a = 1;
  function increment(){
      a = a+1;
      console.log(a)
  }
  return (
    <div>
      <p>value of a : {a}</p>
      {/* <button  onClick={clickHandler}>button</button> {clickhandler} is just reference of the function and we define function above return obviously} */}
      <button onClick={increment}>click</button>
    </div>
  )
  }


export default App
