import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h1>WatchListify</h1>
          <p>Welcome to the world of cinema... It's time to pick a movie.</p>
          <Link to="/movies" className={styles.link}>
            Explore Movies
          </Link>
        </div>
        <div className={styles.contentGif}>
          <DotLottieReact
            src="https://lottie.host/e50ff42f-4342-4425-9e95-c30a51112e0f/Mwd1kEp69O.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
