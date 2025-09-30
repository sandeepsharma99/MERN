import React from 'react'


const Card = (props) => {
    console.log(props);
    function clickHandler(e){
        props.setName(e.target.value)
    }
  return (
    <div>
      <input onChange={clickHandler} name="name" placeholder='Enter your name'></input>
      <p>value of Child : {props.name}</p>
    </div>
  )
}

export default Card

/* basically we do setName in child component with the help of input onChange={clickHandler} function*/
