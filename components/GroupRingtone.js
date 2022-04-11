import React from 'react'
import SingleRingtonez from './SingleRingtonez'


export default function GroupRingtone (data) {

  console.log('ringtone',data.data)
  return (
    <div className='text-center my-20 text-tonez-white'>
      <span className='text-5xl font-bold uppercase'>
        Previous top Searches
      </span>
      <div className='text-left my-20 grid grid-cols-3 gap-8'>
        {data.data.map((d,key) => {
              return  <SingleRingtonez key={key} title={d.title.rendered}/>
        })}
         
        
     
      </div>
    </div>
  )
}
