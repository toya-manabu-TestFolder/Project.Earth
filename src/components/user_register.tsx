import { FormEvent, useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";

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
      <Head>
        <title>ユーザー登録画面</title>
      </Head>
      <div>
        <header>
          <Header />
        </header>
        <h1>会員情報登録</h1>
        <form onSubmit={(event) => handleSubmit(event)}>
          <ul>
            <li>
              <label htmlFor="name">名前:&nbsp;</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                name="name"
              ></input>
            </li>
            <li>
              <label htmlFor="email">メールアドレス:&nbsp;</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="email"
                name="email"
              ></input>
            </li>
            <li>
              <label htmlFor="password">パスワード:&nbsp;</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                id="password"
                name="password"
              ></input>
            </li>
            <li>
              <label htmlFor="zipcode">郵便番号:&nbsp;</label>
              <input
                onChange={(e) => setZipcode(e.target.value)}
                type="text"
                id="zipcode"
                name="zipcode"
              ></input>
            </li>
            <li>
              <label htmlFor="prefecture">都道府県:&nbsp;</label>
              <input
                onChange={(e) => setPrefecture(e.target.value)}
                type="text"
                id="prefecture"
                name="prefecture"
              ></input>
            </li>
            <li>
              <label htmlFor="city">市町村:&nbsp;</label>
              <input
                onChange={(e) => setCity(e.target.value)}
                type="text"
                id="city"
                name="city"
              ></input>
            </li>
            <li>
              <label htmlFor="address">番地以降:&nbsp;</label>
              <input
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                id="address"
                name="address"
              ></input>
            </li>
          </ul>
          <button type="submit">登録</button>
        </form>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
