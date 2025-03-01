import { useEffect, useState } from "react";
import axios from "axios";


export default function Main({ searchQuery }) {

    console.log("Query di ricerca:", searchQuery);

    // scriviamo la costante per l array di film
    const [movies, setMovies] = useState([]);

    // scriviamo la costante per gestire la ricerca in caso di scritta nulla
    const [error, setError] = useState("")


    // impostiamo la chimata
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
                setError('Errore nella ricerca dei film');
                // i caso di errore setta l insieme di fil vuoto
                setMovies([]);
            }
        };
        fetchMovies();
    }, [searchQuery]);

    //fine chimata




    return (
        <div className="main">
            wqww
        </div>
    );
}