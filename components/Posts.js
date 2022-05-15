import React from 'react'
import Image from 'next/image'
import PostImage from '../assets/images/posts/maxresdefault.jpg'
import PostsSkelton from './skelton/PostsSkelton'
import Link from 'next/link'

export default function Posts ({ data, loading }) {
  console.log('data', data)

  if (loading)
    return (
      <>
        <PostsSkelton />
      </>
    )
  return (
    <>
      <div className='text-center my-10 md:my-20 text-tonez-white'>
        <span className='text-3xl md:text-5xl font-bold uppercase'>
          LATEST POSTS
        </span>
      </div>

      <div className='grid lg:grid-cols-2 gap-10 mb-10'>
        {data.map((d, key) => {
          return (
            <Link key={key} href={`/posts/${d.slug}`}>
             
              <div className='border-2 border-dashed border-tonez-white rounded-[50px] p-10 space-y-10 cursor-pointer hover:bg-white/[.10]'>
                <Image
                  className='rounded-[20px]'
                  src={d.acf.ImageUrl}
                  width='490'
                  height='276'
                  alt='image'
                />
                <div className='text-tonez-white space-y-2'>
                  <h2 className='text-4xl font-medium'>{d.title.rendered}</h2>
                  <p className='font-normal'>{d.acf.description}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}
