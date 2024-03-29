import Navbar from 'components/Navbar'
import 'styles/globals.css'
//import { AnimatePresence } from 'framer-motion'
import Footer from 'components/Footer'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Head from 'next/head'
//import Loading from 'components/Loading'
import Script from 'next/script'
import NextNProgress from "nextjs-progressbar";

function MyApp ({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setloading] = useState(false)

  useEffect(() => {
    const handleStart = url => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setloading((loading = true))
    }
    const handleStop = () => {
      setloading((loading = false))
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
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id='google' strategy='lazyOnload'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <div className='md:w-auto md:container md:mx-auto md:px-12 px-4'>
        <Navbar />
        <Head>
          <title>Ringtonez</title>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />

          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'ResearchProject',
                name: 'Ringtonez',
                url: 'https://www.ringtonez.in/',
                logo:
                  'https://www.ringtonez.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.166d3cc9.png&w=64&q=75',
                sameAs: [
                  'https://www.youtube.com/c/Ringtoneztv',
                  'https://www.instagram.com/tonezring/?igshid=YmMyMTA2M2Y%3D'
                ]
              })
            }}
          ></script>
        </Head>
        <NextNProgress color="#fc8d26" />
        <Component key={router.asPath} {...pageProps} />
        {/* {!loading ? (
          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
        ) : (
          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <div className='w-full text-tonez-white text-center py-10'>
              <Loading />{' '}
            </div>
          </AnimatePresence>
        )} */}
      </div>
      {!loading ? <Footer /> : ''}
    </>
  )
}

export default MyApp
