import React from 'react'

export default function SingleRingtonePage () {
  return (
    <>
      <div className='w-full border-2 border-dashed border-tonez-white rounded-[50px] md:rounded-[100px] text-tonez-white md:p-10'>
        <div className='animate-pulse h-full flex flex-row space-y-8'>
          <div className='w-full bg-gray-300 h-8 rounded-md'></div>
          <div className='w-full bg-gray-300 h-6 rounded-md'></div>
        </div>
      </div>
      <div className='mx-10'>
        <div className='bg-tonez-white h-2 my-10 rounded-full '>
          <div
            className='flex justify-end transition-all duration-500 ease-linear w-[1.8%]'
            id='progressBar'
          >
            <div
              className='bg-tonez-orange transition-all ease-linear rounded-full relative w-full h-2 hidden'
              id='progressBarLine'
            ></div>
            <div className='bg-tonez-orange transition-all ease-linear rounded-full h-6 min-w-6 w-6 relative top-[-7px] left-[-2px] '></div>
          </div>
        </div>

        <div className='flex justify-between'>
          <div className='w-6 md:w-10'></div>
          <div>
            <span className='text-tonez-white text-xl md:text-4xl'>
              <div className='animate-pulse h-full flex'>
                <div className='w-full bg-gray-300 h-8 rounded-md '></div>
                <div className='w-full bg-gray-300 h-6 rounded-md '></div>
              </div>
            </span>
          </div>
        </div>
        <div className='text-tonez-white text-center my-10'></div>
        <div className='my-10 text-tonez-white text-3xl flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 justify-center'></div>
      </div>
    </>
  )
}
