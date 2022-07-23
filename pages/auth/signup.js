import React from 'react'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'

export default function signup () {
  return (
    <div>
      <Layout>
        <div>
          <PageHeader title='Sign Up' />
          <div className='relative py-20 text-white w-full flex flex-col space-y-4 items-center justify-center bg-cover bg-center text-center'>
            <h1 className='text-2xl md:text-5xl'>
              We are <b>Almost</b> there!
            </h1>
            <p className='text-sm '>Stay tuned for something amazing!!!</p>
          </div>
        </div>
      </Layout>
    </div>
  )
}
