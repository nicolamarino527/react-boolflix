import React, { useEffect, useState } from "react"
import axios from "axios"
import Flag from "react-world-flags";

export default function HomePage() {

    // memorizziamo i dati
    const [popular, setPopular] = useState([])
    // errore
    const [error, setError] = useState(null);


    // creiamo la costante dove contenere le flags in base alla lingua tramite react-world-flags
    const flags = {
        it: "IT",
        en: "US",
        es: "ES",
        fr: "FR",
        ja: "JA"
    };

    // chiamata
    useEffect(() => {
        const fetchPopular = async () => {
            try {
                const response = await axios.get("https://api.themoviedb.org/3/tv/popular", {
                    params: {
                        api_key: "e99307154c6dfb0b4750f6603256716d",
                        language: "it-IT",
                        page: 1,
                    },
                });

                setPopular(response.data.results);;
            } catch (err) {

                setError("Errore nel recupero dei dati");

            }
        };

        fetchPopular();
    }, []);

    return (
        <>
            <div className="main">
                <h1 className="pb-4 text-white">Uscite popolari</h1>
                {/* <h1 className="text-white">Risultati di ricerca per:</h1> */}
                {/* scriviamo un messaggio in caso di errore */}
                {error && <p className="text-danger">{error}</p>}

                {/* nel caso in cui non troviamo risultati mostrimo un messaggio all utente  */}
                {popular.length > 0 ? (
                    <ul className="card-home-container">
                        {popular.map((pop) => (
                            <li key={pop.id}>
                                <div className="card pb-3" style={{ width: '25rem', height: "35rem" }}>
                                    <img src={`https://image.tmdb.org/t/p/w342${pop.poster_path}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-titl pb-2">{pop.title}</h5>
                                        <p className="card-text">Titolo originale: {pop.original_title}</p>

                                        {/* utilizziamo react-world-flags per cambiare la la descrizione del linguaggio nell immagine della bandiera */}
                                        <p className="card-text">
                                            <Flag className="flags" code={flags[pop.original_language.toLowerCase()] || "?"} ></Flag>
                                        </p>

                                        <p className="card-text">Voto: {pop.vote_average}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Nesun risultato trovato...</p>
                )}
            </div>
        </>
    )
}