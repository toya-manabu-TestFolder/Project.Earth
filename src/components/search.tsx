import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";
import styles from "../styles/search.module.css";

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
    <div className={styles.search}>
      {/* <div className={styles.width}> */}
      <form
        onSubmit={(event) => handleSubmit(event)}
        className={styles.search_form}
      >
        {/* <label htmlFor="search" className={styles.searchDescription}> */}
        <label htmlFor="search">
          <input
            // className={styles.searchForm}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            id="search"
            name="search"
            value={search}
            placeholder="お探しの野菜は？"
          />
        </label>
        <button type="submit"></button>
        {/* <button className={styles.searchButton} type="submit"> */}
        {/* <span className={styles.searchButtonText}>検索</span> */}
        {/* </button> */}
      </form>
      {/* </div> */}
    </div>
  );
}
