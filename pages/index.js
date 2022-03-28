import Head from 'next/head'
import SearchHeader from '../components/SearchHeader'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ringtonez</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <div>
         <SearchHeader />
      </div>
    </div>
  )
}
