import React from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import Posts from '../components/Posts'

export default function blog() {
  return (
    <>
    <Layout>
      <div>
        <PageHeader title='Blog Post' />
        <Posts />
      </div>
    </Layout>
  </>
  )
}
