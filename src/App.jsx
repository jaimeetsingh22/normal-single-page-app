import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'

import Home from './Components/Home'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Services from './Components/Services'

//styles


import './styles/App.scss' 
import './styles/home.scss'
import './styles/header.scss'
import './styles/contact.scss'
import './styles/footer.scss'
import './styles/mediaquery.scss' // mediaquery hamesha last me lagana hai


const App = () => {

  return (

    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/services' element={ <Services /> } />
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App