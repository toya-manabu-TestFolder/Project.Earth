import { useState } from "react";

export default function User_register() {
  const [lastName, setLastname] = useState("");

  const handleSubmit = async (event) => {};

  const data = {
    lastName: lastName,
  };
  const options = {
    method: "POST",
    body: JSON.stringify(data),
  };
  const response = await fetch(URL, options);

  return (
    <>
      <p>新規会員登録</p>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div>
          <label htmlFor="lastName">姓</label>
          <input
            onChange={(e) => setLastname(e.target.value)}
            type="text"
            id="lastName"
            name="lastName"
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
