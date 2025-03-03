import { useEffect, useState } from "react";
import axios from "axios"
import Flag from "react-world-flags";

export default function Search({ searchQuery }) {

    console.log("Query di ricerca:", searchQuery);

    // scriviamo la costante per l array di film
    const [movies, setMovies] = useState([]);

    // scriviamo la costante per l array di serie
    const [series, setSeries] = useState([]);

    // scriviamo la costante per gestire la ricerca in caso di scritta nulla
    const [error, setError] = useState("")


    // creiamo la costante dove contenere le flags in base alla lingua tramite react-world-flags
    const flags = {
        it: "IT",
        en: "US",
        es: "ES",
        fr: "FR",
        ja: "JA"
    };





    // impostiamo la chimata per i film
    useEffect(() => {
        // // se la query è nulla non facciamo partire la chiamata
        if (!searchQuery) return;

        // facciamo in  modo che la chiamata sia asincrona (utilizzando async/await, try/catch)
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: 'e99307154c6dfb0b4750f6603256716d',
                        query: searchQuery,
                    },
                });

                // aggiorniamo i dati di set movies con quelli delle chiamata
                setMovies(response.data.results);

                // in caso di errore setta lo stato error
                setError('');
            } catch (err) {
                console.error(err);
                setError('Errore di ricerca');
                // i caso di errore setta l insieme di fil vuoto
                setMovies([]);
            }

        };

        fetchMovies();
    }, [searchQuery]);
    //fine chimata

    // impostiamo la chimata per le serie
    useEffect(() => {
        // // se la query è nulla non facciamo partire la chiamata
        if (!searchQuery) return;

        // facciamo in  modo che la chiamata sia asincrona (utilizzando async/await, try/catch)
        const fetchSeries = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/search/tv?', {
                    params: {
                        api_key: 'e99307154c6dfb0b4750f6603256716d',
                        query: searchQuery,
                    },
                });

                // aggiorniamo i dati di set movies con quelli delle chiamata
                setSeries(response.data.results);

                // in caso di errore setta lo stato error
                setError('');
            } catch (err) {
                console.error(err);
                setError('Errore di ricerca');
                // i caso di errore setta l insieme di fil vuoto
                setSeries([]);
            }

        };

        fetchSeries();
    }, [searchQuery]);


    //fine chimata




    return (

        <div className="main">
            {/* <h1 className="text-white">Risultati di ricerca per:</h1> */}
            {/* scriviamo un messaggio in caso di errore */}
            {error && <p className="text-danger">{error}</p>}

            {/* nel caso in cui non troviamo risultati mostrimo un messaggio all utente  */}
            {movies.length > 0 ? (
                <ul className="card-container">
                    {movies.map((movie) => (
                        <li key={movie.id}>
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-titl pb-2">{movie.title}</h5>
                                    <p className="card-text">Titolo originale: {movie.original_title}</p>

                                    {/* utilizziamo react-world-flags per cambiare la la descrizione del linguaggio nell immagine della bandiera */}
                                    <p className="card-text">
                                        <Flag className="flags" code={flags[movie.original_language.toLowerCase()] || "?"} ></Flag>
                                    </p>

                                    <p className="card-text">Voto: {movie.vote_average}</p>
                                    {/* <p className="card-text">Descrizione: {movie.overview}</p> */}
                                </div>
                            </div>
                        </li>
                    ))}
                    {series.map((season) => (
                        <li key={season.id}>
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={`https://image.tmdb.org/t/p/w342${season.poster_path}`} className="card-img-top" alt={`https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`} />
                                <div className="card-body">
                                    <h5 className="card-titl pb-2">{season.title}</h5>
                                    <p className="card-text">Titolo originale: {season.original_title}</p>

                                    {/* utilizziamo react-world-flags per cambiare la la descrizione del linguaggio nell immagine della bandiera */}
                                    <p className="card-text">
                                        <Flag className="flags" code={flags[season.original_language.toLowerCase()] || "?"} ></Flag>
                                    </p>

                                    <p className="card-text">Voto: {season.vote_average}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nesun risultato trovato...</p>
            )}
        </div>
    );
}