import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/login.module.css";

export default function User_register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [prefecture, setPrefecture] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    //以下fetch
    //fetchのoptionで使うdata
    const data = {
      name: name,
      email: email,
      password: password,
      zipcode: zipcode,
      prefecture: prefecture,
      city: city,
      address: address,
    };
    //fetcherのoption
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: `${process.env["DB_KEY"]}`,
        Authorization: `Bearer ${process.env["DB_KEY"]}`,
      },
      body: JSON.stringify(data),
    };

    const response = await fetch("http://localhost:3000/api/users?", options);
    console.log(response);
    const result = await response.json();
    console.log(result);

    //responseを外部に出せるかな？

    if (response.ok === true) {
      router.replace("/login");
    }
  };

  return (
    <>
      <div className={styles.blank}>
        <div className={styles.container}>
          <div className={styles.width}>
            <div className={styles.title}>新規会員登録</div>
            <form onSubmit={(event) => handleSubmit(event)} className="">
              <div>
                <div className={styles.line}>
                  <label htmlFor="name" className="">
                    名前
                  </label>
                  <div className={styles.input}>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      id="name"
                      name="name"
                      className={styles.input_form}
                      placeholder="ラクス　太郎"
                    ></input>
                  </div>
                </div>
              </div>

              <div>
                <div className={styles.line}>
                  <label htmlFor="email" className="">
                    メールアドレス
                  </label>
                  <div className={styles.input}>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      id="email"
                      name="email"
                      className={styles.input_form}
                      placeholder="@example.com"
                    ></input>
                  </div>
                </div>
              </div>

              <div>
                <div className={styles.line}>
                  <label htmlFor="password" className="">
                    パスワード
                  </label>
                  <div className={styles.input}>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="text"
                      id="password"
                      name="password"
                      className={styles.input_form}
                      placeholder="password"
                    ></input>
                  </div>
                </div>
              </div>

              <div>
                <div className={styles.line}>
                  <label htmlFor="zipcode" className="">
                    郵便番号
                  </label>
                  <div className={styles.input}>
                    <input
                      onChange={(e) => setZipcode(e.target.value)}
                      type="text"
                      id="zipcode"
                      name="zipcode"
                      className={styles.input_form}
                      placeholder="111-2222"
                    ></input>
                  </div>
                </div>
              </div>

              <div>
                <div className={styles.line}>
                  <label htmlFor="prefecture" className="">
                    都道府県
                  </label>
                  <div className={styles.input}>
                    <input
                      onChange={(e) => setPrefecture(e.target.value)}
                      type="text"
                      id="prefecture"
                      name="prefecture"
                      className={styles.input_form}
                      placeholder="○○県"
                    ></input>
                  </div>
                </div>
              </div>

              <div>
                <div className={styles.line}>
                  <label htmlFor="city" className="">
                    市町村
                  </label>
                  <div className={styles.input}>
                    <input
                      onChange={(e) => setCity(e.target.value)}
                      type="text"
                      id="city"
                      name="city"
                      className={styles.input_form}
                      placeholder="○○市"
                    ></input>
                  </div>
                </div>
              </div>

              <div>
                <div className={styles.line}>
                  <label htmlFor="address" className="">
                    マンション名・番地等
                  </label>
                  <div className={styles.input}>
                    <input
                      onChange={(e) => setAddress(e.target.value)}
                      type="text"
                      id="address"
                      name="address"
                      className={styles.input_form}
                      placeholder="11-22 ○○マンション 101"
                    ></input>
                  </div>
                </div>
              </div>

              <div className={styles.button}>
                <button type="submit" className={styles.inner_button}>
                  登録
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
