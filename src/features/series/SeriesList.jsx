import { useSelector } from "react-redux";
import Serie from "./Serie";
import styles from "./SeriesList.module.css";
import { useState, Fragment } from "react";
import { Show } from "react-smart-conditional";
import Spinner from "../../components/Spinner";
import Preview from "./Preview";

function SeriesList() {
  const [isSerieOpen, setIsSerieOpen] = useState(false);
  const { series, isLoading, error } = useSelector(
    (store) => store.seriesState
  );

  return (
    <div className={styles.container}>
      <div className={isSerieOpen ? styles.blur : styles.seriesGrid}>
        <Show as={Fragment}>
          <Show.If condition={isLoading}>
            <div className={styles.loading}>
              <Spinner color="#e50914" />
            </div>
          </Show.If>
          <Show.If condition={error} as={Fragment}>
            <div className={styles.error}>
              <p>{error}</p>
            </div>
          </Show.If>
          <Show.If condition={series.length > 0} as={Fragment}>
            {series.map((serie) => (
              <Serie
                serieObj={serie}
                key={serie.id || serie.imdbID}
                setOpen={setIsSerieOpen}
              />
            ))}
          </Show.If>
          <Show.Else as={Fragment}>
            <div className={styles.noResults}>
              <p>No movies found. Try a different search term.</p>
            </div>
          </Show.Else>
        </Show>
      </div>
      {isSerieOpen && (
        <Show>
          <Show.If condition={isLoading}>
            <div className={styles.loading}>
              <Spinner color="#e50914" />
            </div>
          </Show.If>
          <Show.Else>
            <Preview setOpen={setIsSerieOpen} />
          </Show.Else>
        </Show>
      )}
    </div>
  );
}

export default SeriesList;
