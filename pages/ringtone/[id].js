import { useRouter } from 'next/router'
import React, { useState } from 'react'
import PlayIcon from '../../assets/images/play-button-arrowhead.png'
import PauseIcon from '../../assets/images/pause.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

function Posts ({ data }) {
  const detail = data[0]
  const router = useRouter()
  const { id } = router.query
  const [showPlayButton, setPlayButton] = useState(true)
  const [showduration , setduration] = useState(0)
  const [updateWidth , stupdateWidth] = useState(0)

  // setduration(audio.currentTime)

  // const onLoadedMetadata = () => {
  //   if (audioRef.current) {
  //     console.log(audioRef.current.duration)
  //   }
  // }

  let playPause = () => {
    setPlayButton((showPlayButton = !showPlayButton))
    let audio = document.getElementById(detail.id)

    if (!showPlayButton) {
      audio.play()
    } else {
      audio.pause()
      audio.currentTime = 0
    }
  }
  let duration = (e) => {
    
    let audio = document.getElementById(detail.id)
    console.log("consile " ,Math.floor(audio.currentTime))
    setduration(showduration = Math.floor(audio.currentTime))

  }

  return (
    <>
      <div className=' flex justify-center w-full border-2 border-dashed border-tonez-white rounded-[100px] text-tonez-white py-20'>
        <span className='text-6xl uppercase font-extrabold'>{id}</span>
      </div>
      <div className='mx-10'>
        <div className='bg-tonez-white h-2 my-10 rounded-full'>
          <div className='flex justify-end' id='progressBar'>
          <div className='bg-tonez-orange rounded-full h-6 w-6 relative top-[-7px]'></div>
          </div>
         
        </div>
        <audio
          id={detail.id}
          src={detail.source_url}
          onTimeUpdate={duration}
          
        ></audio>
        <div className='flex justify-between'>
          <div className=' w-10 '>
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
            <span className='text-tonez-white text-4xl'> {showduration}</span>
          </div>
        </div>
        <div className='text-tonez-white text-center my-10'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className='my-10 text-tonez-white text-3xl flex space-x-10 flex justify-center'>
          <div className='py-6 px-20 flex justify-center border-2 border-dashed border-tonez-white rounded-[100px]'>
            <a href='/'>Download MP3</a>
          </div>
          <div className='py-6 px-20 flex justify-center border-2 border-dashed border-tonez-white rounded-[100px]'>
            <a href='/'>Download MP4r</a>
          </div>
        </div>
      </div>
    </>
  )
}

Posts.getInitialProps = async context => {
  const { id } = context.query
  const getPosts = await fetch(
    `https://zigtone.com/wp-json/wp/v2/media?_fields=source_url,title,id,date&slug=${id}`
  )
  const data = await getPosts.json()
  return { data }
}

export default Posts
