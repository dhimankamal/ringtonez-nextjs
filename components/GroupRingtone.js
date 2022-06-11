import React, { useState, useEffect } from 'react'
import SingleRingtonez from './SingleRingtonez'
//import Pagination from './Pagination'
import GroupRingtoneSkelton from './skelton/GroupRingtoneSkelton'
import Link from 'next/link'
import Button from './Button'

export default function GroupRingtone ({
  data,
  title,
  loading,
  numberCols = '3',
  seeAllbtn,
  LoadMore
}) {
  const [btnLoading, setBtnLoading] = useState(false)
  // const onPageChange = (activePage) => {
  //   console.log(activePage)
  // }
  if (loading)
    return <GroupRingtoneSkelton title={title} numberCols={numberCols} />
  return (
    <div className='text-center my-10 md:my-20 text-tonez-white'>
      <span className='text-3xl md:text-5xl font-bold uppercase'>{title}</span>
      <div
        className={`text-left my-10 md:my-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-${numberCols} gap-8`}
      >
        {data
          ? data.map((d, key) => {
              return (
                <SingleRingtonez
                  key={key}
                  title={d.title.rendered}
                  slug={d.slug}
                  id={d.id}
                  Url={d.source_url}
                  date={d.date}
                />
              )
            })
          : 'nodata'}
      </div>
      {seeAllbtn ? (
        <Link href='/ringtone'>
          <a className='bg-tonez-orange px-10 py-4 rounded-full'>
            See All Ringtonez
          </a>
        </Link>
      ) : (
        <Button
          key={1}
          Text='Load More'
          onClick={LoadMore}
          isLoading={btnLoading}
        />
      )}

      {/* <div>
      <Pagination totalPages={5} currentPage={1} onPageChange={onPageChange}/>
      </div> */}
    </div>
  )
}
