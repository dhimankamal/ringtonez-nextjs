import React from 'react'

export default function PostsSkelton () {
  return (
    <>
      <div className='text-center my-10 md:my-20 text-tonez-white'>
        <span className='text-3xl md:text-5xl font-bold uppercase'>
          LATEST POSTS
        </span>
      </div>
      <div className='grid lg:grid-cols-2 gap-10 mb-10 animate-pulse'>
        <div className='border-2 border-dashed border-tonez-white rounded-[50px] p-10 space-y-10'>
          <div className='bg-gray-300 w-full h-[276px] rounded-[50px] col-span-2'></div>

          <div className='text-tonez-white space-y-6'>
            <div className='w-full bg-gray-300 h-8 rounded-md '></div>
            <div className='w-44 bg-gray-300 h-6 rounded-md '></div>
          </div>
        </div>
        <div className='border-2 border-dashed border-tonez-white rounded-[50px] p-10 space-y-10'>
          <div className='bg-gray-300 w-full h-[276px] rounded-[50px] col-span-2'></div>

          <div className='text-tonez-white space-y-6'>
            <div className='w-full bg-gray-300 h-8 rounded-md '></div>
            <div className='w-44 bg-gray-300 h-6 rounded-md '></div>
          </div>
        </div>
      </div>
    </>
  )
}
