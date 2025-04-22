import { useSelector } from "react-redux";
import styles from "./Preview.module.css";
import { Show } from "react-smart-conditional";
import Spinner from "../../components/Spinner";
function Preview({ onClose }) {
  const { isLoading, selectedMovie } = useSelector(
    (store) => store.moviesState
  );

  // Return early if no movie is selected
  if (!selectedMovie) return null;

  const {
    Poster: poster,
    Title: title,
    Released: date,
    Plot: overview,
  } = selectedMovie;

  return (
    <Show>
      <Show.If condition={isLoading}>
        <div className={styles.loading}>
          <Spinner />
        </div>
      </Show.If>
      <Show.Else>
        <>
          <div className={styles.overlay}></div>
          <div className={styles.movieCard}>
            <button className={styles.closeButton} onClick={onClose}>
              ×
            </button>
            <div className={styles.previewContent}>
              <img className={styles.previewImage} src={poster} alt={title} />
              <div className={styles.previewInfo}>
                <h2>{title}</h2>
                <div className={styles.meta}>
                  <span>{date.split(" ")[2]}</span>
                </div>
                <p className={styles.overview}>{overview}</p>
              </div>
            </div>
          </div>
        </>
      </Show.Else>
    </Show>
  );
}

export default Preview;
