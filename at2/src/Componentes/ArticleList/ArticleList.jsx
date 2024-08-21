import { useState } from "react";
import {useMovieSearch } from "../../stores/movieService"
import { Link } from "react-router-dom";

const MovieList = () => {
  const [searchInput, setSearchInput] = useState("");
  const movies = useMovieSearch(searchInput);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div className="text-center mt-5">
        <input
          type="text"
          name="searchMovie"
          id="searchMovie"
          value={searchInput}
          placeholder="Pesquise Filmes"
          onChange={handleInputChange}
          className="text-center text-lg p-2 pl-7 pr-7 border border-white rounded bg-black hover:border-rose-700 focus:bg-white transition-all"
        />
      </div>

      <div className="pb-5 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 mx-10">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <div
              key={index}
              className="relative w-full h-80 md:h-96 bg-cover bg-center overflow-hidden mb-10"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.poster_path})`,
              }}
            >
              
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center bg-opacity-30 hover:bg-opacity-0 hover:border transition-all">
                <Link
                  to={`filmes/${movie.id}`}
                  className="text-rose-800 mt-1 hover:tracking-wide transition-all font-bold"
                >
                  
                  <div className="text-white text-center max-w-2xl p-4">
                  <h1 className="text-xl font-bold text-white text-center mt-2">{movie.title}</h1>
                    <p className="text-lg">
                      {movie.release_date}{" "}
                    </p>
                    <p className="mt-2">
                      Notas: {movie.vote_average}{" "}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-lg col-span-5 text-center text-rose-500 font-bold">
            Nenhum Filme Encontrado{" "}
          </p>
        )}
      </div>
    </>
  );
};

export default MovieList;
