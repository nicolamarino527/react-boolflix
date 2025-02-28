import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ onSearch }) {
    // scriviamo la constante per onservare la query di ricerca
    const [searchQuery, setSearchQuery] = useState("")

    // scriviamo la funzione per salvare la query tramite il form
    const handleSearch = (event) => {
        event.preventDefault();
        // mandiamo i dati al componente genitore
        onSearch(searchQuery)
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
                                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled text-white" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>

                        {/* aggiungiamo la funzione iìon submit al click del bottone e in seriamo il valore nella costante */}
                        <form className="d-flex" role="search" onSubmit={handleSearch}>
                            <input className="form-control me-2" type="search" placeholder="Cerca film, serie tv..." aria-label="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="btn btn-outline-danger" type="submit">Cerca</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}