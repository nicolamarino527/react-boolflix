import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar';
import Main from './components/Main';

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
      <Main searchQuery={searchQuery} />
    </>
  )
}

export default App
