/* eslint-disable @next/next/link-passhref */
import React, { useState, useRef, useEffect } from 'react'
import PlayIcon from '../assets/images/play-button-arrowhead.png'
import PauseIcon from '../assets/images/pause.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const SingleRingtonez = ({ title, id, Url, date, slug ,showNumber }) => {
  const [showPlayButton, setPlayButton] = useState(true)
  const wrapperRef = useRef(null)

  useEffect(() => {
    let audio = document.getElementById(id)
    function handleClickOutside (event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        audio.pause()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setPlayButton((showPlayButton = true))
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  let playPause = () => {
    setPlayButton((showPlayButton = !showPlayButton))
    let audio = document.getElementById(id)

    if (!showPlayButton) {
      audio.play()
    } else {
      audio.pause()
      audio.currentTime = 0
    }
  }
  return (
    <div
      ref={wrapperRef}
      className='flex items-center  space-x-4 py-6 md:py-10 px-14 md:px-20 border-2 border-dashed border-tonez-white rounded-[50px] md:rounded-[100px] hover:bg-white/[.10] transition duration-300'
    >
      <div className=' flex items-center justify-center w-10'>
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
      <Link href={`/ringtone/${slug}`}>
        <div className='cursor-pointer'>
          <p className='text-xl md:text-2xl font-semibold capitalize'>
            {showNumber?title:title.substring(3).replace(/_|-/g,' ')}
            {/* {title.length > 12 ? '...' : ''} */}
          </p>
          <audio id={id} src={Url}></audio>
          <span>Upload at {date.substring(0, 10)}</span>
        </div>
      </Link>
    </div>
  )
}

export default SingleRingtonez
