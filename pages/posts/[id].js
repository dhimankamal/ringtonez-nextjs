import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import GroupRingtone from '../../components/GroupRingtone'
import Image from 'next/image'
//import PostImage from '../../assets/images/posts/maxresdefault.jpg'
import axios from 'axios'
import PostSkelton from '../../components/skelton/PostSkelton'
import PageHeader from '../../components/PageHeader'

export default function SinglePost () {
  const [loading, setLoading] = useState(true)
  const [ringloading, setRingLoading] = useState(true)
  const [data, setData] = useState({})
  const [ringdata, setRingData] = useState([])
  const router = useRouter()
  const { id } = router.query

  
  const loadData = async () => {
    setLoading((loading = true))
    try {
      const loaddata = await axios.get(
        `https://ringtonez.dhimaan.in/wp-json/wp/v2/posts?slug=${id}&_fields=acf,title`
      )
      setData((data = loaddata?.data[0]))
      setLoading((loading = false))
      loadringtone(data)
    } catch (e) {
      console.log('error', e)
      setLoading((loading = false))
    }
  }

  const loadringtone = async data => {
    setRingLoading((ringloading = true))
    if (data) {
      let test = await Promise.all(
        data.acf.ringtonearrrayurlmp3.split(',').map(async id => {
          try {
            const loaddata = await axios.get(
              `https://ringtonez.dhimaan.in/wp-json/wp/v2/media?_fields=source_url,title,id,date,slug&include=${id}`
            )
            return loaddata?.data[0]
          } catch (e) {
            console.log('error', e)
            return false
          }
        })
      )
      setRingData((ringdata = test))
      setRingLoading((ringloading = false))
    }

    console.log('ringdata', ringdata)
  }

  useEffect(() => {
    loadData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
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
       
        <div className='grid lg:grid-cols-3 gap-10 mt-10 lg:m-10'>
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
          <div className='hidden lg:flex gap-10 flex-col w-full'>
            <div className='animate-pulse h-96 border-2 border-dashed border-tonez-white rounded-[50px] p-10'>
              <div className='w-full bg-gray-300 h-full rounded-md'>

              </div>
            </div>
            <div className='animate-pulse h-96 border-2 border-dashed border-tonez-white rounded-[50px] p-10'>
              <div className='w-full bg-gray-300 h-full rounded-md'>

              </div>
            </div>
            <div className='animate-pulse h-96 border-2 border-dashed border-tonez-white rounded-[50px] p-10'>
              <div className='w-full bg-gray-300 h-full rounded-md'>

              </div>
            </div>
            <div className='animate-pulse h-96 border-2 border-dashed border-tonez-white rounded-[50px] p-10'>
              <div className='w-full bg-gray-300 h-full rounded-md'>

              </div>
            </div>
            
          </div>
        </div>
      </>
    )
  }
}
