import Movie from "../movies/Movie";
import styles from "./WatchQueue.module.css";
function WatchQueue({ watchList }) {
  return (
    <div className={styles.movieGrid}>
      {watchList.map((movie) => (
        <Movie movieObj={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default WatchQueue;
