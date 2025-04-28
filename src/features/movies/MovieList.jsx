import * as React from "react";
import { useSelector } from "react-redux";
import Movie from "./Movie";
import styles from "./MovieList.module.css";
import { useState } from "react";
import Preview from "./Preview";
import { Show } from "react-smart-conditional";
import Spinner from "../../components/Spinner";

function MovieList() {
  const [isMovieOpen, setIsMovieOpen] = useState(false);
  const { movies, isLoading, error } = useSelector(
    (store) => store.moviesState
  );

  function handleClose() {
    setIsMovieOpen(false);
  }

  return (
    <div className={styles.container}>
      <div className={isMovieOpen ? styles.blur : styles.movieGrid}>
        <Show as={React.Fragment}>
          <Show.If condition={isLoading}>
            <div className={styles.loading}>
              <Spinner color="#e50914" />
            </div>
          </Show.If>
          <Show.If condition={error} as={React.Fragment}>
            <div className={styles.error}>
              <p>{error}</p>
            </div>
          </Show.If>
          <Show.If condition={movies.length > 0} as={React.Fragment}>
            {movies.map((movie) => (
              <Movie
                key={movie.id || movie.imdbID}
                movieObj={movie}
                setOpen={setIsMovieOpen}
              />
            ))}
          </Show.If>
          <Show.Else as={React.Fragment}>
            <div className={styles.noResults}>
              <p>No movies found. Try a different search term.</p>
            </div>
          </Show.Else>
        </Show>
      </div>
      {isMovieOpen && (
        <Show>
          <Show.If condition={isLoading}>
            <div className={styles.loading}>
              <Spinner color="#e50914" />
            </div>
          </Show.If>
          <Show.Else>
            <Preview onClose={handleClose} />
          </Show.Else>
        </Show>
      )}
    </div>
  );
}

export default MovieList;
