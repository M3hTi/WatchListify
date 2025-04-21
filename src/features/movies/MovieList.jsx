import { useSelector } from "react-redux";
import Movie from "./Movie";
import styles from './MovieList.module.css'
function MovieList() {
  const movies = useSelector((store) => store.moviesState.movies);
  return (
    <div className={styles.movieGrid}>
      {movies.map((movie) => (
        <Movie key={movie.id} movieObj={movie} />
      ))}
    </div>
  );
}

export default MovieList;
