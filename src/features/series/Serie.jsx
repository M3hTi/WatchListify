import styles from "./Serie.module.css";
import { IoBookmark } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaStar } from "react-icons/fa";

function Serie({ serieObj }) {
  const {
    name: title,
    poster_path: poster,
    first_air_date: date,
    vote_average: vote,
  } = serieObj;
  return (
    <div className={styles.serieCard}>
      <img
        className={styles.serieImage}
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        alt={title}
      />
      <div className={styles.serieInfo}>
        <h3 className={styles.serieTitle}>{title}</h3>
        <div className={styles.serieMeta}>
          <span>{date.split("-")[0]}</span>
          <div className={styles.raing}>
            <FaStar />
            <span>{vote.toFixed(1)}</span>
          </div>
        </div>
      </div>
      <div className={styles.watchListContainer}>
        <button className={styles.preview}>Preview</button>
        <button className={styles.watchList}>
          <>
            <IoBookmark />
            Add to watch list
          </>
        </button>
      </div>
    </div>
  );
}

export default Serie;
