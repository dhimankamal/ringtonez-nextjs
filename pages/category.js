import React from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import GroupRingtone from '../components/GroupRingtone'

function Category ({ data }) {
 console.log(data)
   

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

  let data = []

  const getCategory = await fetch(
    'https://zigtone.com/wp-json/wp/v2/categories?_fields=name,id'
  )

  const category = await getCategory.json()

  category.map( x => {
    data.push({name:x.name})

    
  })
  // const getPosts = await fetch(
  //   'https://zigtone.com/wp-json/wp/v2/media?_fields=source_url,title,id,date,slug&per_page=3'
  // )

  // const posts = await getPosts.json()

   return { data: data }
}

export default Category
