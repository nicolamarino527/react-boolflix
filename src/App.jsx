import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  // costante per search query
  const [searchQuery, setSearchQuery] = useState("");

  // aggiorniamo la ricerca
  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  }

  return (
    <>
      <Navbar onSearch={handleSearchQuery} />
      <Search searchQuery={searchQuery} />
    </>
  )
}

export default App
