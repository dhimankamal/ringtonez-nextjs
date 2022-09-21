import GroupRingtone from 'components/GroupRingtone'
import Layout from 'components/Layout'
import Posts from 'components/Posts'
import SearchHeader from 'components/SearchHeader'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Home ({ data, postData }) {
  const [loading, setLoading] = useState(false)
  const [postloading, setpostLoading] = useState(false)

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

export async function getStaticProps () {
  const loadData = await axios.get(
    'https://ringtonez.dhimaan.in/index.php/wp-json/wp/v2/media?_fields=source_url,title,id,date,slug&per_page=9&mime_type=audio/mpeg&per_page=6'
  )
  const loadPostData = await axios.get(
    'https://ringtonez.dhimaan.in/index.php/wp-json/wp/v2/posts?_fields=acf,title,slug&per_page=4'
  )
  let postData = loadPostData?.data || []
  let data = loadData?.data || []
  return {
    props: { data, postData },
    revalidate: 2000
  }
}

export default Home
