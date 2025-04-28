import { useSelector } from "react-redux";
import styles from "./Preview.module.css";

function Preview({ setOpen }) {
  const selectedSerie = useSelector((store) => store.seriesState.selectedSerie);

  console.log(selectedSerie);

  const {
    Title: title,
    Poster: poster,
    Plot: overview,
    Year: date,
  } = selectedSerie;

  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.movieCard}>
        <button className={styles.closeButton} onClick={() => setOpen(false)}>
          ×
        </button>
        <div className={styles.previewContent}>
          <img className={styles.previewImage} src={poster} alt={title} />
          <div className={styles.previewInfo}>
            <h2>{title}</h2>
            <div className={styles.meta}>
              <span>{date?.split("-")[0]}</span>
            </div>
            <p className={styles.overview}>{overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preview;
