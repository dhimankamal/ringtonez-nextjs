import React from 'react'
import Layout from 'components/Layout'
import PageHeader from 'components/PageHeader'
import Logo from 'assets/images/logo.png'
import Image from 'next/image'

export default function about () {
  return (
    <>
      <Layout title='About - Ringtonez'>
        <div>
          <PageHeader title='About us' />
          <div className='font-light text-base normal-case mt-4 space-y-4 text-center text-tonez-white my-10 md:px-20'>
            <p>
            There are people who always dream to have some crazy ringtones for their phones to meet the latest trends, while someone always aims to set some funny ringtones to make others laugh immediately. There are some who have used the default ringtone from ages. Keeping people who change their ringtones frequently in mind, We represent you Ringtonez. Where you’ll find the ringtone of every genre. All ringtones are available for free. And every ringtone is compatible for both iPhone and Android. 
            </p>
            <p>Finding a ringtone on our site is very simple. You can search for a ringtone or you can surf through the trending ringtones on the homepage or you can choose any one from popular ringtones.</p>
           <p>Use the play button for a quick preview of the ringtone. If it is of your taste, Simply hit on its title and you’ll be redirected to the download page. From there you can save your ringtone. While you’re on the download page, you will also get to see similar ringtones.</p>
           <p>Ringtonez provides you thousands of ringtones. The good thing here is that you don’t need to create any user account for downloading. Everything you do from preview to downloading is free.</p>
            <h2 className='text-2xl font-bold'> Youtube Chanel</h2>
            <div className='mt-20 md:w-1/2 mx-auto'>
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
                  <button className='mt-2 bg-slate-300 hover:bg-red-700 text-tonez-blue hover:text-white font-bold py-2 px-4 rounded'>
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
