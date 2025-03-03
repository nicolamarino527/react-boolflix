import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

    // scriviamo la costante per l array di film
    const [movies, setMovies] = useState([]);

    // costante per aggiornare la query
    const [inputQuery, setInputQuery] = useState("")


    // cambiamo il valore in base al contesto
    const { searchQuery, updateSearchQuery } = useSearch()

    // utilizziamo  use navigate
    const navigate = useNavigate()

    // funzione sulla ricerca
    const handleSearch = (e) => {
        e.preventDefault()
        updateSearchQuery(inputQuery)
        navigate("/search")
    }


    // form ricerca dei film
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg bg-body-tertiary-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-danger" href="#">Boolflix</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link active text-white" aria-current="page" href="#">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/trending" className="nav-link text-white" aria-current="page" href="#">Tendenze</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                            </li>
                        </ul>

                        {/* aggiungiamo la funzione iìon submit al click del bottone e in seriamo il valore nella costante */}
                        <form className="d-flex" role="search" onSubmit={handleSearch}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Cerca film, serie tv..."
                                aria-label="Search"
                                value={inputQuery}
                                onChange={(e) => setInputQuery(e.target.value)}
                            />
                            <button type="submit" className="btn btn-outline-danger">Cerca</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}