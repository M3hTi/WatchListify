import styles from "./Movies.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { dataReceived, searchMovie } from "../features/movies/MovieSlice";
import Spinner from "../components/Spinner";
import { Show } from "react-smart-conditional";
import MovieList from "../features/movies/MovieList";
import Header from "../components/Header";

function Movies() {
  const [query, setQuery] = useState("");
  const { isLoading, movies } = useSelector((store) => store.moviesState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataReceived());
  }, [dispatch]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(searchMovie(query, signal));

    return () => controller.abort();
  }, [dispatch, query]);

  return (
    <div className={styles.container}>
      <Header query={query} setQuery={setQuery} />
      <main className={styles.main}>
        <Show>
          <Show.If condition={isLoading && movies.length === 0}>
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
