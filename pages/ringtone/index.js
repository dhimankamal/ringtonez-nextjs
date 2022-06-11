import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import GroupRingtone from '../../components/GroupRingtone'
import axios from 'axios'

export default function Newuploads() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const loadData = async () => {
    setLoading(loading=true)
    try {
      const loaddata = await axios.get(
        'https://ringtonez.dhimaan.in/wp-json/wp/v2/media?_fields=source_url,title,id,date,slug&per_page=21&offset=2&mime_type=audio/mpeg&per_page=2&page=3',{ 'headers': {_pages = _pages } }
        
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
    <Layout title='Latest - Ringtonez'>
      <div>
        <PageHeader title='Latest Uploads' />
      </div>
      <GroupRingtone loading={loading} data={data}  LoadMore = {()=> alert('clicked')}/>
    </Layout>
    </>
  )
}


  
