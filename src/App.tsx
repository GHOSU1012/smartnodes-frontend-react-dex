import React, { lazy } from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { ResetCSS } from 'toolkit/uikit'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import PageLoader from './components/Loader/PageLoader'
import history from './routerHistory'
import Swap from './views/Swap'

const Home = lazy(() => import('./views/Home'))

const App: React.FC = () => {

  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route exact strict path="/swap" component={Swap} />
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </SuspenseWithChunkError>
      </Menu>
    </Router>
  )
}

export default React.memo(App)
