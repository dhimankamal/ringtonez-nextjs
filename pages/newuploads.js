import React from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import GroupRingtone from '../components/GroupRingtone'

export default function Newuploads({ data }) {
  return (
    <>
    <Layout>
      <div>
        <PageHeader title='Latest Uploads' />
      </div>
      <GroupRingtone data={data}/>
    </Layout>
    </>
  )
}

Newuploads.getInitialProps = async (ctx) => {
    const getPosts = await fetch('https://zigtone.com/wp-json/wp/v2/media?_fields=source_url,title,id,date,slug&per_page=21')
    const data = await getPosts.json()
    return { data:  data  }
  }
  
