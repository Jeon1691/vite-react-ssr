import Router from './components/router'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export default new Router({
  routes: [
    { path: '/', component: Home },

    { label: '404', component: NotFound },
  ],
})
