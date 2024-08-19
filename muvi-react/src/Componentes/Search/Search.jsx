import { useState, useEffect } from 'react';

const MovieSearch = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSearch = async (event) => {
        const searchTerm = event.target.value;
        setQuery(searchTerm);

        // Call the API to get filtered movies
        if (searchTerm.length > 2) { // Start searching after 3 characters
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${searchTerm}`);
            const data = await response.json();
            setMovies(data.results);
        } else {
            setMovies([]);
        }
    };

    return (
        <div className="search-bar-container">
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search for a movie..."
                className="search-input"
            />
            <div className="movie-list">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div key={movie.id} className="movie-item">
                            <h3>{movie.title}</h3>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        </div>
                    ))
                ) : (
                    <p>No movies found</p>
                )}
            </div>
        </div>
    );
};

export default MovieSearch;
