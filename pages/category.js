import React, { useState } from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import GroupRingtone from '../components/GroupRingtone'

function Category ({ data }) {

  return (
    <>
      <Layout>
        <div>
          <PageHeader title='Category' />
        </div>
        <div>
          { data.map(x => {
            return <GroupRingtone data={x.alldata} title={x.catoryName} /> 
          } )}
         
        </div>
      </Layout>
    </>
  )
}

Category.getInitialProps = async ctx => {


    const getCategory = await fetch(
      'https://zigtone.com/wp-json/wp/v2/categories?_fields=name,id'
    )
    const Category = await getCategory.json()
    if (!Category) {
      return { notFound: true };
    }
    const articles = await Promise.all(
      Category.map( async (d) =>{
         let data =  await fetch(`https://zigtone.com/wp-json/wp/v2/posts?categories=${d.id}&_fields=source_url,title,id,date,slug&per_page=6`)
        let alldata =  await data.json()
        return {alldata,catoryName:d.name}
        })
    )

    return { data: articles }
}

export default Category
