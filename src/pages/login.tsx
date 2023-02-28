import { ChangeEvent, SyntheticEvent, useState } from "react";
import { useRouter } from "next/router";
import { Edu_VIC_WA_NT_Beginner } from "@next/font/google";

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
