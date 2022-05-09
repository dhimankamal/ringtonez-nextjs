import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import PostImage from '../../assets/images/posts/maxresdefault.jpg'

export default function SinglePost () {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <div className='flex justify-center w-full border-2 border-dashed border-tonez-white rounded-[50px] md:rounded-[100px] text-tonez-white py-16 md:py-36'>
        <span className='text-2xl md:text-6xl uppercase font-extrabold'>
          {id}
        </span>
      </div>

      <div className='grid grid-cols-3 gap-10 m-10'>
        <div className='col-span-2 space-y-10'>
          <div>
            <Image className='rounded-[20px]' src={PostImage} alt='image' />
          </div>

          <h2 className='text-tonez-white text-3xl font-bold'>
            Trampoline Ringtones 2022 // Best Ringtones With Download Link
          </h2>
          <p className='text-tonez-white text-xl font-normal'>
            Hey What's going on everybody, it's Dhiman back with most requested
            video on our channel.Trampoline Ringtones 2022 // Best Ringtones
            With Download Link
          </p>
          <h3 className='text-tonez-white text-3xl font-bold'>
            Watch Video Tutorial
          </h3>
          <div>
            <iframe
              className='w-full h-96'
              src='https://www.youtube.com/embed/3m_2DrFdd5g'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen=''
            ></iframe>
          </div>
          <h3 className='text-tonez-white text-3xl font-bold'>
            Download Now
          </h3>
          <div>
              
          </div>
        </div>
        <div className='grid gap-10'>
          <div className='h-96 border-2 border-dashed border-tonez-white rounded-[50px]'></div>
          <div className='h-96 border-2 border-dashed border-tonez-white rounded-[50px]'></div>
          <div className='h-96 border-2 border-dashed border-tonez-white rounded-[50px]'></div>
          <div className='h-96 border-2 border-dashed border-tonez-white rounded-[50px]'></div>
          <div className='h-96 border-2 border-dashed border-tonez-white rounded-[50px]'></div>
        </div>
      </div>
    </>
  )
}
