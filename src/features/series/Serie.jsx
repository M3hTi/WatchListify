import styles from "./Serie.module.css";
import { IoBookmark } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useLocalStorage } from "react-haiku";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getSerie } from "./SeriesSlice";
import { normalizeMovieData } from "../../utils/normalizeMovieData";

function Serie({ serieObj, setOpen }) {
  const normalizeSerie = normalizeMovieData(serieObj);
  const [isAddedToWatchList, setIsAddedToWatchList] = useState(false);
  const [watchList, setWatchList] = useLocalStorage("watchList", []);
  const dispatch = useDispatch();
  const {
    name: title,
    id,
    poster_path: poster,
    first_air_date: date,
    vote_average: vote,
  } = normalizeSerie;

  useEffect(() => {
    const isExistInWatchList = watchList.some((movie) => movie.id === id);
    // console.log(isExistInWatchList)
    setIsAddedToWatchList(isExistInWatchList);
  }, [watchList, id]);

  function handleAddSeries() {
    if (!isAddedToWatchList) {
      setIsAddedToWatchList(true);
      setWatchList((watchList) => [...watchList, normalizeSerie]);
    } else {
      setIsAddedToWatchList(false);
      setWatchList((watchList) => watchList.filter((movie) => movie.id !== id));
    }
  }

  function handlePreview() {
    setOpen(true);
    dispatch(getSerie(normalizeSerie));
  }
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
          <span>{date?.split("-")[0]}</span>
          <div className={styles.raing}>
            <FaStar />
            <span>{vote?.toFixed(1)}</span>
          </div>
        </div>
      </div>
      <div className={styles.watchListContainer}>
        <button className={styles.preview} onClick={handlePreview}>
          Preview
        </button>
        <button className={styles.watchList} onClick={handleAddSeries}>
          {isAddedToWatchList ? (
            <>
              <MdDelete style={{ fontSize: "2rem" }} />
              Delete from watch list
            </>
          ) : (
            <>
              <IoBookmark />
              Add to watch list
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default Serie;
