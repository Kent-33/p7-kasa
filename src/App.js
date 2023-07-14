import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Annonce from './pages/Annonce'
import Error from './pages/Error'
import Header from './layout/Header'
import Footer from './layout/Footer'

const App = () => {
  return (
    <div>      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />      
          <Route path='/annonce/:id_annonce' element={<Annonce />} />      
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App