import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { dataReceived } from "../features/series/SeriesSlice";
import { Show } from "react-smart-conditional";
import SeriesList from "../features/series/SeriesList";
import styles from "./Series.module.css";
import Spinner from "../components/Spinner";

function Series() {
  const [query, setQuery] = useState("");

  const { isLoading, series } = useSelector((store) => store.seriesState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataReceived());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <Header query={query} setQuery={setQuery} />
      <main className={styles.main}>
        <Show>
          <Show.If condition={isLoading && series.length === 0}>
            <div className={styles.loading}>
              <Spinner />
            </div>
          </Show.If>
          <Show.Else>
            <SeriesList />
          </Show.Else>
        </Show>
      </main>
    </div>
  );
}

export default Series;
