import React, { useState } from 'react'
import PlayIcon from '../assets/images/play-button-arrowhead.png'
import PauseIcon from '../assets/images/pause.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

function SingleRingtonez ({title,id,Url,date,slug}) {
  const [showPlayButton, setPlayButton] = useState(true)

  let playPause = () => {
    setPlayButton((showPlayButton = !showPlayButton))
      let audio = document.getElementById(id);
      if(!showPlayButton){
        audio.play();
      }else{
        audio.pause();
        audio.currentTime = 0;
      }
  }
  return (
    <Link href={`/ringtone/${slug}`}>
    <div className='flex items-end space-x-4 py-10 px-20 border-2 border-dashed border-tonez-white rounded-[100px] hover:bg-white/[.10] transition duration-300'>
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
        <audio id={id} src={Url}></audio>
        <span>Upload at {date.substring(0,10)}</span>
      </div>
    </div>
    </Link>
  )
}


export default SingleRingtonez