import React, { useState } from 'react'
import PlayIcon from '../assets/images/play-button-arrowhead.png'
import PauseIcon from '../assets/images/pause.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function SingleRingtonez ({title}) {
  const [showPlayButton, setPlayButton] = useState(true)

  let playPause = () => {
    setPlayButton((showPlayButton = !showPlayButton))
    console.log(showPlayButton)
  }
  return (
    <div className='flex items-end space-x-4 py-10 px-20 border-2 border-dashed border-tonez-white rounded-[100px]'>
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

      <div>
        <p className='text-2xl font-semibold'>{title.substring(0,12)}{(title.length>12)?'...':''}</p>
        <span>By Lorem Ipsum</span>
      </div>
    </div>
  )
}
