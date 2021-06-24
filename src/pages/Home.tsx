import request from '../utils/request'
import './Home.css'

const Home: SSRPage<{ data: any[] }> = (props) => {
  if (!props.loaded) {
    return <span>Loading Data...</span>
  }
  return (
    <>
      <h1>Home</h1>
      <pre>{props.data}</pre>
    </>
  )
}

Home.loadData = async function (ctx) {
  const result = await request.get('https://cnodejs.org/api/v1/topics')

  return {
    data: result.data, // props.data
  }
}

export default Home
