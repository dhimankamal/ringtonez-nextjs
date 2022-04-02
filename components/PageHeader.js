import React from 'react'

export default function PageHeader (props) {
  return (
    <div className='container flex justify-center mx-auto my-10 w-full items-center h-60 border-2 border-dashed border-tonez-white rounded-[100px] text-tonez-white flex-col space-y-2'>
      <span className='text-4xl uppercase font-bold'>{props.title}</span>
      
    </div>
  )
}
