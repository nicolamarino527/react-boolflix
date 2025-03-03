import { createContext, useState, useContext, use } from 'react'

// creiamo il contesto
const SearchContext = createContext()

// creiamo l provider del contesto
export function SearchProvider({ children }) {
    const [searchQuery, setSearchQuery] = useState("")

    const updateSearchQuery = (query) => {
        setSearchQuery(query);
    }

    // ritorniamo il provider
    return (
        <SearchContext.Provider value={[searchQuery, updateSearchQuery]}>
            {children}
        </SearchContext.Provider>
    )
}

// creiamo un hook per utilizzare il contesto
export const useSearch = () => useContext(SearchContext);