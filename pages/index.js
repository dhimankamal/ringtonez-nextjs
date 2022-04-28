
import GroupRingtone from '../components/GroupRingtone'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import SearchHeader from '../components/SearchHeader'

function Home ({ data }) {
  return (
    <div >
      <Layout title='Search and download ringtones for free - Ringtonez'>
        <div>
          <SearchHeader />
          <GroupRingtone data={data} title="Top Previous Searches"/>
          <Posts />
        </div>
      </Layout>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const getPosts = await fetch('https://zigtone.com/wp-json/wp/v2/media?_fields=source_url,title,id,date,slug&per_page=9')
  const data = await getPosts.json()
  return { data:  data  }
}

export default Home
