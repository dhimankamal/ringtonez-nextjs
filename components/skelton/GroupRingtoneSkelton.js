import React from 'react'

export default function GroupRingtoneSkelton () {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
      <div className='py-8 border-dashed border-2 rounded-full px-10 mx-auto mt-20'>
        <div className='flex animate-pulse flex-row items-center h-full justify-center space-x-5'>
          <div className='w-12 bg-gray-300 h-12 rounded-full '></div>
          <div className='flex flex-col space-y-3'>
            <div className='w-36 bg-gray-300 h-6 rounded-md '></div>
            <div className='w-24 bg-gray-300 h-6 rounded-md '></div>
          </div>
        </div>
      </div>
      <div className='py-8 border-dashed border-2 rounded-full px-10 mx-auto mt-20'>
        <div className='flex animate-pulse flex-row items-center h-full justify-center space-x-5'>
          <div className='w-12 bg-gray-300 h-12 rounded-full '></div>
          <div className='flex flex-col space-y-3'>
            <div className='w-36 bg-gray-300 h-6 rounded-md '></div>
            <div className='w-24 bg-gray-300 h-6 rounded-md '></div>
          </div>
        </div>
      </div>
      <div className='py-8 border-dashed border-2 rounded-full px-10 mx-auto mt-20'>
        <div className='flex animate-pulse flex-row items-center h-full justify-center space-x-5'>
          <div className='w-12 bg-gray-300 h-12 rounded-full '></div>
          <div className='flex flex-col space-y-3'>
            <div className='w-36 bg-gray-300 h-6 rounded-md '></div>
            <div className='w-24 bg-gray-300 h-6 rounded-md '></div>
          </div>
        </div>
      </div>
    </div>
  )
}
