import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import GroupRingtone from '../../components/GroupRingtone'
import axios from 'axios'
import Pagination from '../../components/Pagination'

export default function Newuploads() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [totalpages, setTotalpages] = useState(0)
  const [offsetValue, setOffsetValue] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 6

  const loadData = async () => {
    setLoading(loading = true)
    try {
      const loaddata = await axios.get(
        `https://ringtonez.dhimaan.in/index.php/wp-json/wp/v2/media?_fields=source_url,title,id,date,slug&per_page=21&mime_type=audio/mpeg&per_page=${perPage}&offset=${offsetValue}`

      )
      setData(data = loaddata?.data)
      setTotalpages(totalpages = loaddata?.headers['x-wp-totalpages'])
      //console.log(totalpages)
      setLoading(loading = false)
    } catch (e) {
      console.log('error', e)
      setLoading(loading = false)
    }
  }

  const onPageChange = (activePage) => {
    setCurrentPage(currentPage = activePage)
    setOffsetValue(offsetValue = (activePage - 1) * perPage)
    loadData()
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    //console.log(activePage)
  }

  useEffect(() => {
    loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Layout title='Latest - Ringtonez'>
        <div>
          <PageHeader title='Latest Uploads' />
        </div>
        <GroupRingtone perPage={perPage} loading={loading} data={data} LoadMore={() => alert('clicked')} />
        <div className='mb-10'>
          <Pagination totalPages={totalpages} currentPage={currentPage} onPageChange={onPageChange} />
        </div>
      </Layout>
    </>
  )
}



