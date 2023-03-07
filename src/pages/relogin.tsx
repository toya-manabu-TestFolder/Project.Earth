import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Edu_VIC_WA_NT_Beginner } from "@next/font/google";

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
      if (num !== "ally-supports-cache") {
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
      <form onSubmit={(event) => handleSubmit(event)}>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="email"
            name="email"
          ></input>
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            id="password"
            name="password"
          ></input>
        </div>
        <button type="submit">ログイン</button>
      </form>
    </>
  );
}
