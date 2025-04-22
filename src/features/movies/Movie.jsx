import { FaStar } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import styles from "./Movie.module.css";
import { useLocalStorage } from "react-haiku";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDetail } from "./MovieSlice";

function Movie({ movieObj, setOpen }) {
  const {
    title,
    poster_path: poster,
    release_date: date,
    vote_average: vote,
    id,
  } = movieObj;
  const [watchList, setWatchList] = useLocalStorage("watchList", []);
  const [isAddedToList, setIsAddedToList] = useState(false);
  const dispatch = useDispatch();

  // Check if movie is in watchlist when component mounts or watchList changes
  useEffect(() => {
    const movieExists = watchList.some((movie) => movie.id === id);
    setIsAddedToList(movieExists);
  }, [watchList, id]);

  function handleAddToWatchList() {
    try {
      if (!isAddedToList) {
        // Add to watchlist
        setWatchList((currentList) => [...currentList, movieObj]);
      } else {
        // Remove from watchlist
        setWatchList((currentList) =>
          currentList.filter((movie) => movie.id !== id)
        );
      }
    } catch (error) {
      console.error("Error updating watchlist:", error);
    }
  }

  function handlePreview() {
    dispatch(getDetail(movieObj));
    setOpen(true);
  }

  return (
    <div className={styles.movieCard}>
      <img
        className={styles.movieImage}
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        alt={title}
      />
      <div className={styles.movieInfo}>
        <h3 className={styles.movieTitle}>{title}</h3>
        <div className={styles.movieMeta}>
          <span>{date.split("-")[0]}</span>
          <div className={styles.rating}>
            <FaStar />
            <span>{vote.toFixed(1)}</span>
          </div>
        </div>
      </div>
      <div className={styles.watchListContainer}>
        <button className={styles.preview} onClick={handlePreview}>
          Preview
        </button>
        <button className={styles.watchList} onClick={handleAddToWatchList}>
          {!isAddedToList ? (
            <>
              <IoBookmark />
              Add to watch list
            </>
          ) : (
            <>
              <MdDelete style={{ fontSize: "2rem" }} />
              Delete from watch list
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default Movie;
