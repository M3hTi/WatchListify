import { useLocalStorage } from "react-haiku";
import Header from "../components/Header";
import WatchQueue from "../features/watchList/WatchQueue";
import styles from "./WatchList.module.css";
function WatchList() {
  const [watchList, setWatchList] = useLocalStorage("watchList", []);
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <WatchQueue watchList={watchList} />
      </main>
    </div>
  );
}

export default WatchList;
