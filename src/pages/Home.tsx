import request from '../utils/request'
import './Home.css'

const Home: SSRPage<{ data: any[] }> = (props) => {
  return (
    <>
      <h1>Home</h1>
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
