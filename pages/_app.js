import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Footer from '../components/Footer'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <div className='container mx-auto md:px-12 '>
      <Navbar />
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
         
          <Component {...pageProps} />
        </AnimatePresence>
      </div>
      <Footer />
    </>
  )
}

export default MyApp
