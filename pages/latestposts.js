import React, { useState,useEffect } from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import Posts from '../components/Posts'
import axios from 'axios'

export default function latestPosts() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [postData, setpostData] = useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [postloading, setpostLoading] = useState(true)

    const loadposts = async () => {
        setpostLoading((postloading = true))
        try {
          const loaddata = await axios.get(
            'https://ringtonez.dhimaan.in/wp-json/wp/v2/posts?_fields=acf,title,slug'
          )
          setpostData((postData = loaddata?.data))
          setpostLoading((postloading = false))
        
        } catch (e) {
          console.log('error', e)
          setpostLoading((postloading = false))
        }
    
      }
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
       
        loadposts()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
  return (
    <>
     <Layout title='Latest Posts - Ringtonez'>
      <div>
        <PageHeader title='Latest Posts' />
      </div>
      <Posts data={postData} loading={postloading} />
    </Layout>
    
    </>
  )
}
