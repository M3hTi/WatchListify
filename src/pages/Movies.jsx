import styles from "./Movies.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { dataReceived } from "../features/movies/MovieSlice";
import Spinner from "../components/Spinner";
import { Show } from "react-smart-conditional";
import MovieList from "../features/movies/MovieList";
import Header from "../components/Header";

function Movies() {
  const { isLoading } = useSelector((store) => store.moviesState.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataReceived());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Show>
          <Show.If condition={isLoading}>
            <div className={styles.loading}>
              <Spinner />
            </div>
          </Show.If>
          <Show.Else>
            <MovieList />
          </Show.Else>
        </Show>
      </main>
    </div>
  );
}

export default Movies;
