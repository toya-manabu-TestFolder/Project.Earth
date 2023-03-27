import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";
import styles from "../styles/search.module.css";

export default function Search() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSubmit = function (event: SyntheticEvent) {
    event.preventDefault();
    const searchWords = search.toLowerCase();
    const uri = encodeURI(searchWords);
    router.push(`/farmers?search=${uri}`);
  };
  return (
    <div className={styles.search}>
      <form
        onSubmit={(event) => handleSubmit(event)}
        className={styles.search_form}
      >
        <label htmlFor="search">
          <input
            onChange={(word) => setSearch(word.target.value)}
            type="text"
            id="search"
            name="search"
            value={search}
            placeholder="お探しの野菜は？"
          />
        </label>
        <button type="submit"></button>
      </form>
    </div>
  );
}
