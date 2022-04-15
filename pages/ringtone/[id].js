import { useRouter } from 'next/router'
import React, { useState , useRef} from 'react'
import PlayIcon from '../../assets/images/play-button-arrowhead.png'
import PauseIcon from '../../assets/images/pause.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

function Posts ({ data }) {
  const detail = data[0]
  const router = useRouter()
  const { id } = router.query
  const [showPlayButton, setPlayButton] = useState(true)

  const audioRef = useRef();

  const onLoadedMetadata = () => {
    if (audioRef.current) {
        console.log(audioRef.current.duration);
    }
};

  


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

  return (
    <>
      <div className=' flex justify-center w-full border-2 border-dashed border-tonez-white rounded-[100px] text-tonez-white py-20'>
        <span className='text-6xl uppercase font-extrabold'>{id}</span>
      </div>
      <div className='mx-10'>
      <div className='bg-tonez-white h-2 my-10 rounded-full'>
        <div className='bg-tonez-orange rounded-full h-6 w-6 relative top-[-7px]'></div>
      </div>
      <audio id={detail.id} src={detail.source_url}  ref={audioRef} onLoadedMetadata={onLoadedMetadata}></audio>
      <div className=' flex items-center justify-center w-10 my-10'>
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
