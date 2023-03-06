import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";
import styles from "../styles/header.module.css";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = function (event: SyntheticEvent) {
    event.preventDefault();
    const searchWords = search.toLowerCase();
    const uri = encodeURI(searchWords);
    router.push(`/farmers?search=${uri}`);
  };
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="search">
          <span className={styles.searchDescription}>
            商品名から生産者を探す
          </span>
        </label>
        <input
          className={styles.searchForm}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          id="search"
          name="search"
          value={search}
        />
        <button className={styles.searchButton} type="submit">
          <span className={styles.searchButtonText}>検索</span>
        </button>
      </form>
    </div>
  );
}
