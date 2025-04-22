import { useSelector } from "react-redux";
import Movie from "./Movie";
import styles from "./MovieList.module.css";
import { useState } from "react";
import Preview from "./Preview";
import { Show } from "react-smart-conditional";
import Spinner from "../../components/Spinner";

function MovieList() {
  const [isMovieOpen, setIsMovieOpen] = useState(false);
  const { movies, isLoading } = useSelector((store) => store.moviesState);

  function handleClose() {
    setIsMovieOpen(false);
  }

  return (
    <div className={styles.container}>
      <div className={isMovieOpen ? styles.blur : styles.movieGrid}>
        {movies.map((movie) => (
          <Movie key={movie.id} movieObj={movie} setOpen={setIsMovieOpen} />
        ))}
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
