import { FormEvent, useState } from "react";
import Head from "next/head";
import styles from "../styles/login.module.css";

export default function User_register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [prefecture, setPrefecture] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
      zipcode: zipcode,
      prefecture: prefecture,
      city: city,
      address: address,
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
      <div className={styles.title}>会員の方はこちら</div>
      <form onSubmit={(event) => handleSubmit(event)} className="">
        <div>
          <div className={styles.line}>
            <label htmlFor="name" className=" ">
              名前
            </label>
            <div className={styles.input}>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                name="name"
                className=""
                placeholder="you@site.com"
              ></input>
            </div>
          </div>
        </div>

        <div className="">
          <button type="submit" className="">
            登録
          </button>
        </div>
      </form>
    </>
  );
}
