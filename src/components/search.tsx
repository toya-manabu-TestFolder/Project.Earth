import { useState } from "react";

export default function Search() {
  const [name, setName] = useState("");
  const handleSubmit = function () {
    console.log(name);
  };
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="search">商品名から生産者を探す</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="search"
          name="search"
        />
        <button type="submit">検索</button>
      </form>
    </div>
  );
}
