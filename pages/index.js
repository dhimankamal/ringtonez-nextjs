import GroupRingtone from '../components/GroupRingtone'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import SearchHeader from '../components/SearchHeader'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Home () {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [postData, setpostData] = useState([])
  const [postloading, setpostLoading] = useState(true)

  const loadData = async () => {
    setLoading((loading = true))
    try {
      const loaddata = await axios.get(
        'https://ringtonez.dhimaan.in/wp-json/wp/v2/media?_fields=source_url,title,id,date,slug&per_page=9&mime_type=audio/mpeg&per_page=6'
      )
      setData((data = loaddata?.data))
      setLoading((loading = false))
    } catch (e) {
      console.log('error', e)
      setLoading((loading = false))
    }
  }

  const loadposts = async () => {
    setpostLoading((postloading = true))
    try {
      const loaddata = await axios.get(
        'https://ringtonez.dhimaan.in/wp-json/wp/v2/posts?_fields=acf,title,slug&per_page=4'
      )
      setpostData((postData = loaddata?.data))
      setpostLoading((postloading = false))
    } catch (e) {
      console.log('error', e)
      setpostLoading((postloading = false))
    }
  }

  useEffect(() => {
    loadData()
    loadposts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <Layout title='Search and download ringtones for free - Ringtonez'>
        <div>
          <SearchHeader />
          <GroupRingtone
            loading={loading}
            data={data}
            title='Top Previous Searches'
            numberCols='3'
            seeAllbtn
          />
          <Posts data={postData} loading={postloading} title='Latest Posts' />
        </div>
      </Layout>
    </div>
  )
}

export default Home
