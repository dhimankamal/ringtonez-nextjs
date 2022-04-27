import React from 'react'
import SingleRingtonez from './SingleRingtonez'



export default function GroupRingtone ({data,title}) {

 
  
  return (
    <div className='text-center my-10 md:my-20 text-tonez-white'>
      <span className='text-3xl md:text-5xl font-bold uppercase'>
        {title}
      </span>
      <div className='text-left my-10 md:my-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {data.map((d,key) => {
              return  <SingleRingtonez key={key} title={d.title.rendered} id={d.id} Url={d.source_url} date={d.date} slug={d.slug}/> 
        })}
         
      </div>
    </div>
  )
}
