import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import GroupRingtone from '../../components/GroupRingtone'
import Image from 'next/image'
//import PostImage from '../../assets/images/posts/maxresdefault.jpg'
import axios from 'axios'
import PostSkelton from '../../components/skelton/PostSkelton'
import PageHeader from '../../components/PageHeader'
import Head from 'next/head'

export async function getServerSideProps (context) {
  const { id } = context.params
  const loaddata = await axios.get(
    `https://ringtonez.dhimaan.in/index.php/wp-json/wp/v2/posts?slug=${id}&_fields=acf,title`
  )
  let data = loaddata?.data[0]

  let ringdata = await Promise.all(
    data.acf.ringtonearrrayurlmp3.split(',').map(async id => {
      try {
        const loaddata = await axios.get(
          `https://ringtonez.dhimaan.in/index.php/wp-json/wp/v2/media?_fields=source_url,title,id,date,slug&include=${id}`
        )
        return loaddata?.data[0]
      } catch (e) {
        console.log('error', e)
        return false
      }
    })
  )

  return {
    props: {
      data,
      ringdata
    }
  }
}

export default function SinglePost ({ data, ringdata }) {
  const [loading, setLoading] = useState(false)
  const [ringloading, setRingLoading] = useState(false)

  const router = useRouter()
  const { id } = router.query

  if (loading)
    return (
      <>
        <PostSkelton />
      </>
    )
  if (!data)
    return (
      <>
        <div className='px-40 py-20 bg-white rounded-md shadow-xl'>
          <div className='flex flex-col items-center'>
            <h1 className='font-bold text-tonez-blue text-9xl'>404</h1>

            <h6 className='mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl'>
              <span className='text-red-500'>Oops!</span> Post not found
            </h6>

            <p className='mb-8 text-center text-gray-500 md:text-lg'>
              The page you’re looking for doesn’t exist.
            </p>

            <a
              href='#'
              className='px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100'
            >
              Go home
            </a>
          </div>
        </div>
      </>
    )
  if (!loading) {
    return (
      <>
        <PageHeader title={data.title.rendered} />

        <Head>
          <meta name='description' content={data.acf.description} />
        </Head>

        <div className='m-10 text-center'>
          <div className='col-span-2 space-y-10'>
            <div>
              <Image
                className='rounded-[20px]'
                src={data.acf.ImageUrl}
                alt='image'
                width='640'
                height='340'
              />
            </div>

            <h2 className='text-tonez-white text-3xl font-bold'>
              {data.title.rendered}
            </h2>
            <p className='text-tonez-white text-xl font-normal'>
              {data.acf.description}
            </p>
            <h3 className='text-tonez-white text-3xl font-bold'>
              Watch Video Tutorial
            </h3>
            <div>
              <iframe
                className='w-full h-96'
                src={data.acf.videourl}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen=''
              ></iframe>
            </div>
            <h3 className='text-tonez-white text-3xl font-bold'>
              Download Now
            </h3>
            <div>
              <GroupRingtone
                showNumber={true}
                loading={ringloading}
                data={ringdata}
                numberCols={2}
              />
            </div>
            <h3 className='text-tonez-white text-3xl font-bold'>Tags</h3>
            <p className='text-tonez-white text-xl font-normal'>
              {data.acf.tags}
            </p>
          </div>
        </div>
      </>
    )
  }
}
