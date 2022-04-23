import React from 'react'
import Image from 'next/image'
import PostImage from '../assets/images/posts/maxresdefault.jpg'

export default function Posts () {
  return (
    <>
      <div className='text-center my-10 md:my-20 text-tonez-white'>
        <span className='text-3xl md:text-5xl font-bold uppercase'>LATEST POSTS</span>
      </div>
      <div className='grid lg:grid-cols-2 gap-10 mb-10'>
          <div className='border-2 border-dashed border-tonez-white rounded-[50px] p-10'>
              <Image className='rounded-[20px]'  src={PostImage} width="490" height="276"  alt='image'/>
              <div className='text-tonez-white'> 
                  <h2 className='text-4xl font-medium'>Lorem Ipsum is simply dummy text</h2>
                  <p className='font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
              </div>
          </div>
          <div className='border-2 border-dashed border-tonez-white rounded-[50px] p-10'>
              <Image className='rounded-[20px]'  src={PostImage} width="490" height="276" alt='image'/>
              <div className='text-tonez-white'> 
                  <h2 className='text-4xl font-medium'>Lorem Ipsum is simply dummy text</h2>
                  <p className='font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
              </div>
          </div>
          <div className='border-2 border-dashed border-tonez-white rounded-[50px] p-10'>
              <Image className='rounded-[20px]'  src={PostImage} width="490" height="276" alt='image'/>
              <div className='text-tonez-white'> 
                  <h2 className='text-4xl font-medium'>Lorem Ipsum is simply dummy text</h2>
                  <p className='font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
              </div>
          </div>
          <div className='border-2 border-dashed border-tonez-white rounded-[50px] p-10'>
              <Image className='rounded-[20px]'  src={PostImage} width="490" height="276" alt='image'/>
              <div className='text-tonez-white'> 
                  <h2 className='text-4xl font-medium'>Lorem Ipsum is simply dummy text</h2>
                  <p className='font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
              </div>
          </div>
      </div>
    </>
  )
}
