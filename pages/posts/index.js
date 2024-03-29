import React, { useState, useEffect } from 'react'
import Layout from 'components/Layout'
import PageHeader from 'components/PageHeader'
import Posts from 'components/Posts'
import axios from 'axios'
import Pagination from 'components/Pagination'

export default function LatestPosts () {

  const [postData, setpostData] = useState([])
  const [postloading, setpostLoading] = useState(true)
  const [totalpages, setTotalpages] = useState(0)
  const [offsetValue, setOffsetValue] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 4

  const loadposts = async () => {
    setpostLoading((postloading = true))
    try {
      const loaddata = await axios.get(
        `https://ringtonez.dhimaan.in/index.php/wp-json/wp/v2/posts?_fields=acf,title,slug&per_page=${perPage}&offset=${offsetValue}`
      )
      setpostData((postData = loaddata?.data))
      setTotalpages((totalpages = loaddata?.headers['x-wp-totalpages']))
      setpostLoading((postloading = false))
    } catch (e) {
      console.log('error', e)
      setpostLoading((postloading = false))
    }
  }
  const onPageChange = activePage => {
    setCurrentPage((currentPage = activePage))
    setOffsetValue((offsetValue = (activePage - 1) * perPage))
    loadposts()
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    //console.log(activePage)
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
        <Posts perPage={perPage} data={postData} loading={postloading} />
        <div className='mb-10'>
          <Pagination
            totalPages={totalpages}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </div>
      </Layout>
    </>
  )
}
