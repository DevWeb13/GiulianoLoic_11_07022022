import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import HousingSheet from './pages/HousingSheet/HousingSheet'
import About from './pages/About/About'
import Error from './pages/Error/Error'
import './styles/index.scss'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/fiche-logement/:housingId"
          element={<HousingSheet />}
        ></Route>
        <Route path="/a-propos" element={<About />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
