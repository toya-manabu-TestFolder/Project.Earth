import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = function (event: SyntheticEvent) {
    event.preventDefault();
    const uri = encodeURI(search);
    // 確認用
    // console.log(uri);
    router.push(`/farmers?search=${uri}`);
  };
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="search">商品名から生産者を探す</label>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          id="search"
          name="search"
          value={search}
        />
        <button type="submit">検索</button>
      </form>
    </div>
  );
}
