import { useSelector } from "react-redux";
import styles from "./Preview.module.css";
import Spinner from "../../components/Spinner";
import { useEffect } from "react";
function Preview({ onClose }) {
  const {  selectedMovie } = useSelector(
    (store) => store.moviesState
  );

  useEffect(() => {
    function handleKeyDown(e) {
      // console.log(e.key);
      if (e.key === "Escape") {
        onClose();
      } else {
        e.preventDefault();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Return early if no movie is selected
  if (!selectedMovie) return null;

  const {
    Poster: poster,
    Title: title,
    Released: date,
    Plot: overview,
  } = selectedMovie;

  return (
    
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
  );
}

export default Preview;
