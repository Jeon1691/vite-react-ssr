import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from '@/App'
import { SSRProvider } from '@/context'

const text = document.getElementById('ssr-data')!.innerText
const props = JSON.parse(text)

ReactDOM.hydrate(
  <SSRProvider value={props}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SSRProvider>,
  document.getElementById('app'),
)
