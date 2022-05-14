import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import GroupRingtone from '../../components/GroupRingtone'
import Image from 'next/image'
//import PostImage from '../../assets/images/posts/maxresdefault.jpg'
import axios from 'axios'

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
        'https://ringtonez.dhimaan.in/wp-json/wp/v2/posts?slug=testing-title-2&_fields=acf,title'
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
    let test = await Promise.all(
      data.acf.ringtonearrrayurlmp3.split(',').map(async id => {
        try {
          const loaddata = await axios.get(
            `https://ringtonez.dhimaan.in/wp-json/wp/v2/media?_fields=source_url,title,id,date&include=${id}`
          )
          return loaddata?.data[0]
        } catch (e) {
          console.log('error', e)
          return false
        }
      })
    )
    setRingData((ringdata = test))
    setRingLoading(ringloading = false)
    console.log('ringdata', ringdata)
  }

  useEffect(() => {
    loadData()
  }, [])
  if (loading) return <>Loading</>
  if (!loading) {
    return (
      <>
        <div className='flex justify-center w-full border-2 border-dashed border-tonez-white rounded-[50px] md:rounded-[100px] text-tonez-white py-16 md:py-36'>
          <span className='text-2xl md:text-6xl uppercase font-extrabold'>
            {data.title.rendered}
          </span>
        </div>

        <div className='grid grid-cols-3 gap-10 m-10'>
          <div className='col-span-2 space-y-10'>
            <div>
              <Image
                className='rounded-[20px]'
                src={data.acf.ImageUrl}
                alt='image'
                width='592'
                height='400'
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
              <GroupRingtone loading={ringloading} data={ringdata} />
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
}
