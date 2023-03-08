import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Edu_VIC_WA_NT_Beginner } from "@next/font/google";
import styles from "../styles/login.module.css";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cartData, setcartData] = useState<any>([]);

  useEffect(() => {
    if (localStorage.getItem("cartPage") !== null) {
      localStorage.removeItem("cartPage");
    }
    let storage: any = [];
    for (let i = 0; i < localStorage.length; i++) {
      let num = localStorage.key(i);
      if (num !== "ally-supports-cache" && num !== "category") {
        let test: any = localStorage.getItem(`${num}`);
        test = JSON.parse(test);
        storage.push({
          price_data: {
            unit_amount: test[0].item.price,
            currency: "jpy",
            product_data: {
              name: test[0].item.name,
            },
          },
          quantity: test[0].quantity,
        });
      }
    }
    setcartData(storage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //   let inportData = cartData;
  //   console.log(inportData);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    localStorage.clear();

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
    const response = await fetch("http://localhost:3000/api/relogin", options);
    console.log(response);
    const result = await response.json();
    console.log(result[0].id);

    if (response.ok !== true || result === "") {
      router.replace("/login");
    } else {
      fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartData),
      })
        .then((res) => {
          console.log("status", res.status);
          return res.json();
        })
        .then((data) => {
          console.log("response body", JSON.stringify(data));
          router.push(data.redirectUrl);
        })
        .catch((err) => console.error("Failed to fetch", err));
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
          </div>
        </div>
      </div>
    </>
  );
}
