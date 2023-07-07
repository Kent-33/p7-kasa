import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Annonce from './pages/Annonce';
import About from './pages/About';
import Error from './pages/Error';
import Footer from './components/Footer';

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

export default App;