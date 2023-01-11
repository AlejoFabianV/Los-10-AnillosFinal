import React from 'react';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom'

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import TiendaPage from './pages/TiendaPage';
import ContactoPage from './pages/ContactoPage';
import NosotrosPage from './pages/NosotrosPage';
import ProductoPage from './pages/ProductoPage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='tienda' element={<TiendaPage />} />
          <Route path='contacto' element={<ContactoPage />} />
          <Route path='nosotros' element={<NosotrosPage />} />
          <Route path='producto/:tituloProducto/:subtituloProducto/:idProducto' element={<ProductoPage />} />
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;
