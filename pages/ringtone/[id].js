import React from 'react'
import { useRouter } from 'next/router'

function Posts ({data}) {

  const router = useRouter()
  const { id } = router.query
  console.log("data",data)
  return (
    <>
     
      <div className=' flex justify-center w-full border-2 border-dashed border-tonez-white rounded-[100px] text-tonez-white py-20'>
          <span className='text-6xl uppercase font-extrabold'>{id}</span>
        </div>
      
    


     
    </>
  )
}

Posts.getInitialProps = async (context) => {
 
  const [id] = context.params

  console.log("id",id)

  const getPosts = await fetch('https://zigtone.com/wp-json/wp/v2/media?_fields&slug=sulthan')
  const data = await getPosts.json()
  return { data:  data  }
}

export default Posts 



