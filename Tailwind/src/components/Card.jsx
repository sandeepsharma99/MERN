import React from 'react'

const Card = ({flowerName= 'unknown Flower'}) => {
  return (

    <>
    <div className='w-[300px] rounded-md bg-zinc-800 text-white p-4 m-4 '>
      <img
        className='h-40 w-full rounded-md object-cover'
        src="https://images.pexels.com/photos/19174913/pexels-photo-19174913/free-photo-of-a-woman-in-a-white-dress-and-a-man-in-a-black-suit.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        alt="Couple"
      />
      <h1 className='text-xl font-semibold mt-2'>{flowerName}</h1>
      <p className='text-sm mt-2 text-indigo-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est accusantium fugiat maiores asperiores.</p>
    </div>
    </>


  )
}

export default Card
