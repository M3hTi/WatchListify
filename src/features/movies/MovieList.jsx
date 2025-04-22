import { useSelector } from "react-redux";
import Movie from "./Movie";
import styles from "./MovieList.module.css";
import { useState } from "react";
import Preview from "./Preview";

function MovieList() {
  const [isMovieOpen, setIsMovieOpen] = useState(false);
  const movies = useSelector((store) => store.moviesState.movies);

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
      {isMovieOpen && <Preview onClose={handleClose} />}
    </div>
  );
}

export default MovieList;
