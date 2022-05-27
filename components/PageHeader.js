import React from 'react'

export default function PageHeader (props) {
  return (
    <div className='text-center flex justify-center w-full border-2 border-dashed border-tonez-white rounded-[50px]   md:rounded-[100px] text-tonez-white p-10 md:py-28'>
      <span className='text-3xl md:text-6xl uppercase font-extrabold'>{props.title}</span>
      
    </div>
  )
}
