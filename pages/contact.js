import React from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import ContactImage from '../assets/contactImage.png'
;``

export default function contact () {
  return (
    <>
      <Layout>
        <div>
          <PageHeader title='Contact US' />
          <div className='flex space-x-2 justify-between m-20'>
            <div className='w-full'>
              <Image src={ContactImage} />
            </div>
            <div className='w-full'>
              <form action='' className='grid space-y-6 w-full'>
                <span className='text-3xl font-extrabold uppercase text-tonez-white'>
                  Get In Touch
                </span>
                <input
                  className='rounded-2xl h-16 px-10'
                  type='text'
                  placeholder='Name'
                />
                <input
                  className='rounded-2xl h-16 px-10'
                  type='emial'
                  placeholder='Email'
                />
                <textarea
                  className='rounded-2xl px-10 py-6'
                  placeholder='Message'
                  name=''
                  id=''
                  rows='4'
                ></textarea>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
