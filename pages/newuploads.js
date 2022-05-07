import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import GroupRingtone from '../components/GroupRingtone'
import axios from 'axios'

export default function Newuploads() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const loadData = async () => {
    setLoading(loading=true)
    try {
      const loaddata = await axios.get(
        'https://zigtone.com/wp-json/wp/v2/media?_fields=source_url,title,id,date,slug&per_page=21&offset=2',{
          headers: {
          'Content-Type': 'application/json'
          }
        }
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
    <>
    <Layout title='Latest - Ringtonez'>
      <div>
        <PageHeader title='Latest Uploads' />
      </div>
      <GroupRingtone loading={loading} data={data}/>
    </Layout>
    </>
  )
}


  
