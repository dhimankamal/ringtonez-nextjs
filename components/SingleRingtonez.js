import React, { useState } from 'react'
import PlayIcon from '../assets/images/play-button-arrowhead.png'
import PauseIcon from '../assets/images/pause.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

function SingleRingtonez ({title,id,Url}) {
  const [showPlayButton, setPlayButton] = useState(true)
  // const [url, setUrl] = useState("/")

  // let ringtoneUrl = async (ctx) => {
  //   const getPosts = await fetch(`https://zigtone.com/wp-json/wp/v2/media/${id}?_fields=source_url`)
  //   const data = await getPosts.json()
  //   setUrl(url = data.source_url)
  //   console.log(data)
  //   return { data:  data  }
  // }
  console.log(title,id,Url)
  let playPause = () => {
    setPlayButton((showPlayButton = !showPlayButton))
      let audio = document.getElementById(id);
      if(!showPlayButton){
        audio.play();
      }else{
        audio.pause();
      }
  }
    //ringtoneUrl()
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
        <audio id={id} src={Url}></audio>
        <span>By Lorem Ipsum</span>
      </div>
    </div>
  )
}

// SingleRingtonez.getInitialProps = async (ctx) => {
//   const getPosts = await fetch('https://zigtone.com/wp-json/wp/v2/media/8129?_fields=source_url')
//   const data = await getPosts.json()
//   console.log("d" , data)
//   return { data:  data  }
// }
//https://zigtone.com/wp-json/wp/v2/media/8129?_fields=source_url
//https://zigtone.com/wp-json/wp/v2/media?parent=8128

export default SingleRingtonez