import { useSelector } from "react-redux";
import Serie from "./Serie";
import styles from './SeriesList.module.css'


function SeriesList() {
  const series = useSelector((store) => store.seriesState.series);
  return (
    <div className={styles.container}>
      <div className={styles.seriesGrid}>
        {series.map((serie) => (
          <Serie serieObj={serie} key={serie.id} />
        ))}
      </div>
    </div>
  );
}

export default SeriesList;
