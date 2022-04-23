import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

const Layout = ({
  children,
  title = 'Ringtonez',
  description = 'Search and download ringtones for free. We have thousands of ringtones in various genres available in mp3 format for your phone.'
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content={description} />
    </Head>
    <motion.main
      initial='pageInitial'
      animate='pageAnimate'
      variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        }
      }}
    >
      {children}
    </motion.main>
  </div>
)

export default Layout
