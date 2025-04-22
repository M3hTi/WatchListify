import { useState } from "react";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { LuPopcorn } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
function Header() {
  const [query, setQuery] = useState("");

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/" className={`clear-link ${styles.link}`}>
          <LuPopcorn />
        </Link>
      </div>

      <nav className={styles.navigation}>
        <ul>
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive ? styles.activeNavLink : styles.navLink
              }
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/series"
              className={({ isActive }) =>
                isActive ? styles.activeNavLink : styles.navLink
              }
            >
              Series
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/watchlist"
              className={({ isActive }) =>
                isActive ? styles.activeNavLink : styles.navLink
              }
            >
              Watchlist
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>
          <IoSearch />
        </button>
      </div>

      <div className={styles.github}>
        <a
          href="https://github.com/yourusername/sinevision"
          target="_blank"
          rel="noopener noreferrer"
          className={`clear-link ${styles.link}`}
        >
          <FaGithub />
        </a>
      </div>
    </header>
  );
}

export default Header;
