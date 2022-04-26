import { Seo } from '@/components/SEO'
import { Link } from 'react-router-dom'
import '@/App.css'
import { SSRConsumer } from '@/context'
import ErrorPage from '@/pages/Error'
import router from '@/router'

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
                title="Wemade Vite Template"
                description="React SSR base on Vite"
              />
              <h1 className="text-center text-4xl my-[40px]">
                  Wemade Vite Template
              </h1>
              <nav className="main-nav text-center">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
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
