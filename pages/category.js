import React, { useState } from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import GroupRingtone from '../components/GroupRingtone'

function Category ({ data }) {
  let alldata = []

  let loadposts = (posts, name) => {
    alldata.push( { posts, name }) 
  }
  data.map(async x => {
    try {
      const getPosts = await fetch(
        `https://zigtone.com/wp-json/wp/v2/posts?categories=${x.id}&_fields=source_url,title,id,date,slug&per_page=3`
      )
      const posts = await getPosts.json()
      loadposts(posts, x.name)
      
    } catch (e) {
      console.log(e)
    }
  })

  console.log(alldata)

  return (
    <>
      <Layout>
        <div>
          <PageHeader title='Category' />
        </div>
        <div>
          {/* <GroupRingtone data={data} title='Top Previous Searches' /> */}
        </div>
      </Layout>
    </>
  )
}

Category.getInitialProps = async ctx => {
  const getCategory = await fetch(
    'https://zigtone.com/wp-json/wp/v2/categories?_fields=name,id'
  )

  const category = await getCategory.json()

  return { data: category }
}

export default Category
