import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PlayIcon from '../../assets/images/play-button-arrowhead.png'
import PauseIcon from '../../assets/images/pause.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Layout from '../../components/Layout'
import SingleRingtonePage from '../../components/skelton/SingleRingtonePage'

function Posts () {
  const [detail, setdetail] = useState({})
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { id } = router.query
  const [showPlayButton, setPlayButton] = useState(true)
  const [showduration, setduration] = useState(0)

  useEffect(() => {
    const loadData = async () => {
      setLoading((loading = true))
      try {
        const loaddata = await axios.get(
          `https://ringtonez.dhimaan.in/wp-json/wp/v2/media?_fields=source_url,title,id,date&slug=${id}`
        )
        setdetail((detail = loaddata?.data[0]))
        setLoading((loading = false))
        console.log(detail)
      } catch (e) {
        console.log('error', e)
        setLoading((loading = false))
      }
    }
    loadData()
  },[])



  let playPause = () => {
    setPlayButton((showPlayButton = !showPlayButton))
    let audio = document.getElementById(detail.id)

    if (!showPlayButton) {
      audio.play()
    } else {
      audio.pause()
    }
  }
  let duration = () => {
    let audio = document.getElementById(detail.id)
    setduration((showduration = audio.currentTime))
    let totalDuration = audio.duration
    console.log((showduration / totalDuration) * 100)
    if (1.8 > (showduration / totalDuration) * 100) {
      document.getElementById('progressBar').style.width = 1.8 + '%'
      document.getElementById('progressBarLine').style.display = 'none'
    } else {
      document.getElementById('progressBar').style.width =
        (showduration / totalDuration) * 100 + '%'
      document.getElementById('progressBarLine').style.display = 'block'
    }
  }

  let showTimeDuration = () => {
    if (showduration > 10) {
      return '00:' + Math.floor(showduration)
    } else {
      return '00:0' + Math.floor(showduration)
    }
  }

  let downloadButtonClasses =
    'py-6 px-20 flex justify-center border-2 border-dashed border-tonez-white rounded-[50px] md:rounded-[100px] hover:bg-white/[.10] transition duration-300 text-center'

  if (loading) {
    return <SingleRingtonePage />
  }

 

  return (
    <>
      <Layout title={`${id} - Ringtonez`}>
        <div className='flex justify-center w-full border-2 border-dashed border-tonez-white rounded-[50px] md:rounded-[100px] text-tonez-white py-16 md:py-36'>
          <span className='text-2xl md:text-6xl uppercase font-extrabold'>
            {id}
          </span>
        </div>
        <div className='lg:mx-10'>
          <div className='bg-tonez-white h-2 my-10 rounded-full '>
            <div
              className='flex justify-end transition-all duration-500 ease-linear w-[1.8%]'
              id='progressBar'
            >
              <div
                className='bg-tonez-orange transition-all ease-linear rounded-full relative w-full h-2 hidden'
                id='progressBarLine'
              ></div>
              <div className='bg-tonez-orange transition-all ease-linear rounded-full h-6 min-w-6 w-6 relative top-[-7px] left-[-2px] '></div>
            </div>
          </div>
          <audio
            id={detail.id}
            src={detail.source_url}
            onTimeUpdate={duration}
          ></audio>
          <div className='flex justify-between'>
            <div className='w-6 md:w-10'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={playPause}
              >
                <Image
                  className='cursor-pointer'
                  src={showPlayButton ? PlayIcon : PauseIcon}
                  alt='image'
                />
              </motion.button>
            </div>
            <div>
              <span className='text-tonez-white text-xl md:text-4xl'>
                {showTimeDuration()}
              </span>
            </div>
          </div>
          <div className='text-tonez-white text-center my-10'>
          Download {id} for Android and IOS compatible with latest generation smartphones and smartwatch for free. Download latest Ringtones for Android and IOS! In 2022 on ringtonez.in you can download many Ringtones/ in high quality for free. Save our website on bookmarks and come back in evry day for a new content to be downloaded for free.
          </div>
          <div className='my-10 text-tonez-white text-3xl flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 justify-center'>
            <a
              className={downloadButtonClasses}
              href={detail.source_url}
              download
              target='_blank'
              rel="noreferrer"
            >
              Download MP3
            </a>

            {/* <a
              className={downloadButtonClasses}
              href= {detail.source_url}
              download="new-or-old-filename.mp3"
            >
              Download M4r
            </a> */}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Posts
