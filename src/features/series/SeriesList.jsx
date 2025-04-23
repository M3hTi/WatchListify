import { useSelector } from "react-redux";
import Serie from "./Serie";
import styles from "./SeriesList.module.css";
import { useState } from "react";
import { Show } from "react-smart-conditional";
import Spinner from "../../components/Spinner";
import Preview from "./Preview";

function SeriesList() {
  const [isSerieOpen, setIsSerieOpen] = useState(false);
  const { series, isLoading } = useSelector((store) => store.seriesState);

  return (
    <div className={styles.container}>
      <div className={isSerieOpen ? styles.blur : styles.seriesGrid}>
        {series.map((serie) => (
          <Serie serieObj={serie} key={serie.id} setOpen={setIsSerieOpen} />
        ))}
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
