import { ChangeEvent, SyntheticEvent, useState } from "react";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
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
    console.log(result);

    if (response.ok !== true || result === "") {
      router.replace("/login");
    } else {
      router.replace("/");
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
                  <label htmlFor="" className="">
                    メールアドレス
                  </label>
                  <div className={styles.input}>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id=""
                    placeholder="パスワード"
                  />
                </div>
              </div>
              <div className={styles.button}>
                <button type="submit">ログイン</button>
              </div>
            </form>

            <div className={styles.title}>新規会員登録はこちら</div>
            <Link href={"http://localhost:3000/user_register/"}>
              <div className={styles.button}>
                <button type="submit">会員登録</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="container text-center">
        <div className="row justify-content-center">
          <div className="mt-5 mb-3">会員の方はこちら</div>
          <form
            className="border rounded bg-white col-md-4 p-3"
            onSubmit={(event) => handleSubmit(event)}
          >
            <div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  メールアドレス
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control rounded-pill w-75 m-auto"
                  id="exampleFormControlInput1"
                  placeholder="メールアドレス"
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label"
              ></label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control rounded-pill w-75 m-auto"
                id="exampleFormControlInput1"
                placeholder="パスワード"
              />
            </div>
            <button type="submit" className="btn btn-secondary my-4 px-5">
              ログイン
            </button>
          </form>

          <div className="mt-5 mb-3">新規会員登録はこちら</div>
          <Link href={"http://localhost:3000/user_register/"}>
            <button type="submit" className="btn btn-secondary w-25 my-4 px-5">
              会員登録
            </button>
          </Link>
        </div>
      </div> */}
    </>
  );
}
