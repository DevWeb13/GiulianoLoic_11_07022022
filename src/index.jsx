import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import HousingSheet from './pages/HousingSheet/HousingSheet'
import About from './pages/About/About'
import Error from './pages/Error/Error'
import './styles/index.scss'

import Header from './components/Header/Header'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/fiche-logement/:housingId">
          <HousingSheet />
        </Route>
        <Route path="/a-propos">
          <About />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
