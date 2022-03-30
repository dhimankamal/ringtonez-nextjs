import React, { useState } from 'react';
import PlayIcon from '../assets/images/play-button-arrowhead.png'
import PauseIcon from '../assets/images/pause.png'
import Image from 'next/image'

export default function SingleRingtonez() {
    const [showPlayButton, setPlayButton] = useState(false);

    

    let playPause = () => {
        setPlayButton(showPlayButton =!showPlayButton)
        console.log(showPlayButton)
    }
  return (
    <div className='flex items-center space-x-4  py-10 px-20 border-2 border-dashed border-tonez-white rounded-[100px]'>
    <div className=' flex items-center justify-center w-10'>
      <Image className='cursor-pointer' onClick={playPause} src={(showPlayButton)?PlayIcon:PauseIcon} alt='image'  />
    </div>
    <div>
      <p className='text-2xl font-semibold'>Lorem Ipsum</p>
      <span>By Lorem Ipsum</span>
    </div>
  </div>
  )
}
