import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Footer from '../components/Footer'
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import Head from 'next/head'
import Loading from '../components/Loading';

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setloading(loading = true)
    }
    const handleStop = () => {
      setloading(loading = false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <>
      <div className='md:w-auto md:container md:mx-auto md:px-12 px-4'>
        <Navbar />
        <Head>
          <title>Ringtonez</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        {(!loading) ?
          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
          :
          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <div className='w-full text-tonez-white text-center py-10'><Loading /> </div>
          </AnimatePresence>
        }
      </div>
      {(!loading) ? <Footer /> : ''}

    </>
  )
}

export default MyApp
