import { FormEvent, useState } from "react";

export default function User_register() {
  const [name, setName] = useState("");
  const [postcode, setPostcode] = useState("");
  const [prefecture, setPrefecture] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const data = {
      name: name,
      postcode: postcode,
      prefecture: prefecture,
      email: "to@example.com",
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    //users.tsファイルを指定してる
    const response = await fetch("http://localhost:3000/api/users?", options);
    console.log(response);
    const result = await response.json();
    console.log(result);
  };

  return (
    <>
      <p>新規会員登録</p>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div>
          <label htmlFor="name">姓</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            name="name"
          ></input>
        </div>
        <div>
          <label></label>
          <input></input>
        </div>
        <div>
          <label></label>
          <input></input>
        </div>
        <div>
          <label htmlFor="postcode">郵便番号</label>
          <input
            onChange={(e) => setPostcode(e.target.value)}
            type="text"
            id="postcode"
            name="postcode"
          ></input>
        </div>
        <div>
          <label htmlFor="prefecture">都道府県</label>
          <input
            onChange={(e) => setPrefecture(e.target.value)}
            type="text"
            id="prefecture"
            name="prefecture"
          ></input>
        </div>
        <div>
          <label></label>
          <input></input>
        </div>
        <div>
          <label></label>
          <input></input>
        </div>
        <div>
          <label></label>
          <input></input>
        </div>
        <div>
          <label></label>
          <input></input>
        </div>
        <button type="submit">登録</button>
      </form>
    </>
  );
}
