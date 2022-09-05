import React from 'react'
import Head from 'next/head'

export default function PageHeader (props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className='text-center flex justify-center w-full border-2 border-dashed border-tonez-white rounded-[50px] md:rounded-[100px] text-tonez-white p-10 md:py-28'>
        <h1 className='text-3xl md:text-6xl uppercase font-extrabold'>
          {props.title}
        </h1>
      </div>
    </>
  )
}
