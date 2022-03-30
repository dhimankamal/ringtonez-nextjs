import React from 'react'
import SingleRingtonez from './SingleRingtonez'


export default function GroupRingtone () {
  return (
    <div className='container mx-auto text-center my-20 text-tonez-white'>
      <span className='text-5xl font-bold uppercase'>
        Previous top Searches
      </span>
      <div className='text-left my-20 grid grid-cols-3 gap-8'>
          <SingleRingtonez />
          <SingleRingtonez />
          <SingleRingtonez />
          <SingleRingtonez />
          <SingleRingtonez />
          <SingleRingtonez />
          <SingleRingtonez />
          <SingleRingtonez />
          <SingleRingtonez />
     
      </div>
    </div>
  )
}
