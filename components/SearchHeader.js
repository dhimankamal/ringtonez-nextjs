import React from 'react'
import SearchIcon from '../assets/images/search.png'
import Image from 'next/image'

export default function SearchHeader () {
  return (
    <>
      <div className='container flex justify-center mx-auto my-10 w-full items-center h-80 border-2 border-dashed border-tonez-white rounded-[100px] text-tonez-white flex-col space-y-2'>
        <span className='text-4xl uppercase font-bold'>Search Ringtone</span>
        <span className='uppercase text-lg'>
          Free Ringtones • Download Ringtones
        </span>
        <div className='bg-tonez-white w-1/3 rounded-full flex items-center justify-between px-10 '>
          <input
            type='text'
            className='text-tonez-blue focus:outline-0 w-full'
            placeholder='Search Ringtone here'
          />
          <button className='w-16 h-16 p-2.5' type='submit'>
            <Image src={SearchIcon} alt='searchIcon' />
          </button>
        </div>
      </div>
    </>
  )
}
