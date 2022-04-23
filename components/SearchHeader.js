import React from 'react'
import SearchIcon from '../assets/images/search.png'
import Image from 'next/image'

export default function SearchHeader () {
  return (
    <>
      <div className='flex p-4 justify-center my-10 w-full items-center py-10 lg:py-28 border-2 border-dashed border-tonez-white rounded-[50px]  md:rounded-[100px] text-tonez-white flex-col space-y-4'>
        <span className='text-2xl lg:text-4xl uppercase font-bold'>Search Ringtone</span>
        <span className='uppercase text-sm lg:text-lg text-center'>  
          Free Ringtones • Download Ringtones
        </span>
        <div className='bg-tonez-white lg:w-1/3 rounded-full flex items-center justify-between px-8 '>
          <input
            type='text'
            className='text-tonez-blue focus:outline-0 w-full'
            placeholder='Search Ringtone here'
          />
          <button className='p-2.5' type='submit'>
            <Image src={SearchIcon} alt='searchIcon' />
          </button>
        </div>
      </div>
    </>
  )
}
