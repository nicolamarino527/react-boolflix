import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'

// componenti
import Navbar from './components/Navbar';
import Search from './components/Search';

// pagine
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import TrendingPage from './pages/TrandingPage';


// context
import { SearchProvider } from './context/SearchContext';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <SearchProvider>
        <BrowserRouter>
          <Navbar />
          <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/trending" element={<TrendingPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </SearchProvider>
    </>
  )
}
export default App
