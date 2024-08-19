import { useState } from 'react';

const Search = ({ movies }) => {
    const [query, setQuery] = useState(''); // State to store search query
    const [filteredMovies, setFilteredMovies] = useState(movies); // State to store filtered movies

    // Event handler to update query and filter movies
    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setQuery(searchTerm);

        // Filter movies based on search query
        const filtered = movies.filter(movie =>
            movie.title.toLowerCase().includes(searchTerm)
        );
        setFilteredMovies(filtered);
    };

    return (
        <div className="search-bar-container">
            {/* Search Input */}
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search for a movie..."
                className="search-input"
            />

            {/* Render Filtered Movies */}
            <div className="movie-list">
                {filteredMovies.length > 0 ? (
                    filteredMovies.map((movie) => (
                        <div key={movie.id} className="movie-item">
                            <h3>{movie.title}</h3>
                            <img src={movie.poster_path} alt={movie.title} />
                            {/* Include any other movie details you want to display */}
                        </div>
                    ))
                ) : (
                    <p>No movies found</p>
                )}
            </div>
        </div>
    );
};

export default Search;
