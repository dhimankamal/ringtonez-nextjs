import GroupRingtone from '../components/GroupRingtone'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import SearchHeader from '../components/SearchHeader'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Home () {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const loadData = async () => {
    setLoading(loading=true)
    try {
      const loaddata = await axios.get(
        'https://zigtone.com/wp-json/wp/v2/media?_fields=source_url,title,id,date,slug&per_page=9'
      )
      setData(data = loaddata?.data)
      setLoading(loading=false)
    } catch (e) {
      console.log('error', e)
      setLoading(loading=false)
    }
  }

  useEffect(() => {
    loadData()
  },[])
  return (
    <div>
      <Layout title='Search and download ringtones for free - Ringtonez'>
        <div>
          <SearchHeader />
          <GroupRingtone loading={loading} data={data} title="Top Previous Searches"/>
          <Posts />
        </div>
      </Layout>
    </div>
  )
}


export default Home
