import { ChangeEvent, SyntheticEvent, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/login.module.css";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch("http://localhost:3000/api/login", options);
    console.log(response);
    const result = await response.json();
    console.log(result.status);

    if (response.ok !== true || result === "") {
      router.push("/login");
    } else {
      router.push("/");
    }
  };
  return (
    <>
      <div className={styles.blank}>
        <div className={styles.container}>
          <div className={styles.width}>
            <div className={styles.title}>会員の方はこちら</div>
            <form className="" onSubmit={(event) => handleSubmit(event)}>
              <div>
                <div className={styles.line}>
                  <label htmlFor="email" className="">
                    メールアドレス
                  </label>
                  <div className={styles.input}>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className={styles.input_form}
                      id=""
                      placeholder="@example.com"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.line}>
                <label htmlFor="" className="form-label">
                  パスワード
                </label>
                <div className={styles.input}>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className={styles.input_form}
                    id=""
                    placeholder="パスワード"
                  />
                </div>
              </div>
              <div className={styles.button}>
                <button type="submit" className={styles.inner_button}>
                  ログイン
                </button>
              </div>
            </form>

            <div className={styles.title}>新規会員登録はこちら</div>
            <Link
              href={"http://localhost:3000/user_register/"}
              className={styles.link}
            >
              <div className={styles.button}>
                <button type="submit" className={styles.inner_button}>
                  新規会員登録をする
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
