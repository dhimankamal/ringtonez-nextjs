import React from 'react'

import { motion } from 'framer-motion'

const Layout = ({ children }) => (
  <div>
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
