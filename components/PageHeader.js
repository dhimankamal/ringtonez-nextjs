import React from 'react'

export default function PageHeader (props) {
  return (
    <div className=' flex justify-center w-full border-2 border-dashed border-tonez-white rounded-[50px]   md:rounded-[100px] text-tonez-white py-24 md:py-36'>
      <span className='text-3xl md:text-6xl uppercase font-extrabold'>{props.title}</span>
      
    </div>
  )
}
