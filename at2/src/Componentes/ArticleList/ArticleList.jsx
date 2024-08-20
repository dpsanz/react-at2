import { useState } from "react";
import {useMovieSearch} from '../stores/movieService.js'
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
          placeholder="Digite para buscar filmes"
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="pb-20 sm:mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-[1600px]">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <div
              key={index}
              className="relative w-full h-80 md:h-96 bg-cover bg-center overflow-hidden mb-10"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center hover:bg-opacity-70 hover:tracking-widest transition-all">
                <Link
                  to={`filmes/${movie.id}`}
                  className="text-rose-800 mt-1 hover:tracking-widest transition-all font-bold"
                >
                  <div className="text-white text-center max-w-2xl p-4">
                    <p className="mt-2 text-xl text-rose-500 font-bold">
                      AGORA NOS CINEMAS
                    </p>
                    <h1 className="text-2xl md:text-5xl font-bold">
                      {movie.title}
                    </h1>
                    <p className="mt-2 text-2xl">
                      Lançamento: {movie.release_date}{" "}
                    </p>
                    <p className="mt-2">
                      Nota Média de Avaliações: {movie.vote_average}{" "}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-xl col-span-3 mt-4 text-center dark:text-white">
            Nenhum Filme Encontrado 😔{" "}
          </p>
        )}
      </div>
    </>
  );
};

export default MovieList;
