import React from 'react'
import SingleRingtonez from './SingleRingtonez'
import Pagination from './Pagination'
import GroupRingtoneSkelton from './skelton/GroupRingtoneSkelton'



export default function GroupRingtone ({data,title,loading,classes}) {
  // const onPageChange = (activePage) => {
  //   console.log(activePage)
  // }
  console.log("slug",data)
  if(loading) return <GroupRingtoneSkelton title={title} classes={classes}/>
  return (
    <div className='text-center my-10 md:my-20 text-tonez-white'>
      <span className='text-3xl md:text-5xl font-bold uppercase'>
        {title}
      </span>
      <div className={`text-left my-10 md:my-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 ${classes}`}>
        {data?data.map((d,key) => {
              return  <SingleRingtonez key={key} title={d.title.rendered} slug={d.slug} id={d.id} Url={d.source_url} date={d.date} slug={d.slug}/> 
        }):'nodata'}
         
      </div>
      {/* <div>
      <Pagination totalPages={5} currentPage={1} onPageChange={onPageChange}/>
      </div> */}
    </div>
  )
}
