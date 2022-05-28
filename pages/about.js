import React from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import Logo from '../assets/images/logo.png'
import Image from 'next/image'

export default function about () {
  return (
    <>
      <Layout title='About - Ringtonez'>
        <div>
          <PageHeader title='About us' />
          <div className='font-light text-base normal-case mt-4 space-y-4 text-center text-tonez-white my-10'>
            <p>
              Download New Mp3 Ringtones free for android and iPhone. Living in
              a time where almost all of our daily life activities are
              controlled in one way or the other through our mobile phones, not
              having a good ringtone for specific calls and important
              notifications is an unimaginable thought. The kind of ringtones we
              put on our phones can either make or break our image in front of
              many people whenever the phone rings in public.
            </p>
            <h2 className='text-2xl font-bold'> Youtube Chanel</h2>
            <div className='mt-20 w-1/2 mx-auto'>
              <div className='rounded-3xl shadow-xl my-3 bg-tonez-white'>
                <div className='flex justify-center mt-8'>
                  <div  className='rounded-full border-solid border-white border-2 -mt-3 bg-tonez-blue p-4'>
                  <Image
                    src={Logo}
                    alt='logo'
                   
                  />
                  </div>
                 
                </div>
                <div className='text-center px-3 pb-6 pt-2'>
                  <h3 className='text-tonez-blue text-sm bold font-sans'>
                    Ringtonez
                  </h3>
                  <p className='mt-2 font-sans font-light text-tonez-blue'>
                    Ringtonez is a YouTube Channel where you will find all
                    variety of ringtones.
                  </p>
                  <button class='mt-2 bg-slate-300 hover:bg-red-700 text-tonez-blue hover:text-white font-bold py-2 px-4 rounded'>
                    Subscribe
                  </button>
                </div>
                {/* <div className="flex justify-center pb-3 text-tonez-blue">
                  <div className="text-center mr-3 border-r pr-3">
                    <h2>34</h2>
                    <span>Photos</span>
                  </div>
                  <div className="text-center">
                    <h2>42</h2>
                    <span>Friends</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
