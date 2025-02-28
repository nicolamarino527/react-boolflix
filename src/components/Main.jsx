export default function Main({ searchQuery }) {
    console.log("Query di ricerca:", searchQuery);

    return (
        <div className="main">
            <h1>Risultati per: {searchQuery}</h1>
        </div>
    );
}