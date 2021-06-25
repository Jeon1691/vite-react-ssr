import { Link } from 'react-router-dom'
import router from './router'
import { SSRConsumer } from './context'
import ErrorPage from './pages/Error'
import './App.css'
import { Seo } from 'components/SEO'

export function App() {
  return (
    <>
      <SSRConsumer>
        {(ctx) => {
          if (ctx.$ssrErrorMsg) {
            return <ErrorPage message={ctx.$ssrErrorMsg} status={ctx.status!} />
          }

          return (
            <>
              <Seo
                title="Vite React SSR"
                description={'React SSR base on Vite'}
              ></Seo>
              <h1 className="text-center text-4xl my-[40px]">
                React SSR base on Vite
              </h1>
              <nav className="main-nav text-center">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                </ul>
              </nav>
              <div className="text-center">{router.view({ ssr: ctx })}</div>
            </>
          )
        }}
      </SSRConsumer>
    </>
  )
}
