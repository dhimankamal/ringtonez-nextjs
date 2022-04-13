import React from 'react'
import { useRouter } from 'next/router'

export default function Posts () {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <div className=' flex justify-center w-full border-2 border-dashed border-tonez-white rounded-[100px] text-tonez-white py-20'>
        <span className='text-6xl uppercase font-extrabold'>{id}</span>
      </div>
    </>
  )
}
