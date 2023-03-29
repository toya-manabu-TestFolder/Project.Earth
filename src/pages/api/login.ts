import type { NextApiRequest, NextApiResponse } from "next";
import { json } from "stream/consumers";

export default async function loginFetch(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;
  const url = `${process.env.DB_URL}/users?email=eq.${email}&password=eq.${password}`;
  const options = {
    method: "GET",
    headers: {
      apikey: `${process.env.DB_KEY}`,
      Authorization: `Bearer ${process.env.DB_KEY}`,
      "Content-Type": "application/json",
    },
  };
  // login.tsの機能
  // ログイン画面で受け取ったemailとpassの情報を用いて、DBから一致するユーザー情報を取得する。
  // 取得成功　→ result（set-cookie,status200,本体data）を返す
  // 取得失敗　→ result(error.message , status500)を返す
  try {
    const userPass = await fetch(url, options);
    const data = await userPass.json();
    console.log("data", data);
    res
      .setHeader("Set-Cookie", [`id=${data[0].id};path=/`])
      .status(200)
      .json(data);

    // エラーも返す
  } catch (error) {
    if (error instanceof Response) {
      const errorMessage = await error.json();
      const errorInfo = errorMessage.error;
      console.log("エラーリザルト", errorInfo);
      // 以下login.tsxに返しているもの,コンソールで描画されているのはtsxでconsoleしてるもの
      res.status(500).json(errorInfo);
    }
  }
}
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const { email, password } = req.body;
//   const url = `${process.env.DB_URL}/users?email=eq.${email}&password=eq.${password}`;
//   const options = {
//     method: "GET",
//     headers: {
//       apikey: `${process.env.DB_KEY}`,
//       Authorization: `Bearer ${process.env.DB_KEY}`,
//       "Content-Type": "application/json",
//     },
//   };
//   const response = await fetch(url, options);
//   const data = await response.json();

// jsonも返さないとresの中身返らないって聞いた気がする？？
// →　jsonなくてもstatusだけでも返る。.jsonの話はGETした中身とかは.jsonがないと返らないということ。

//   res
//     .setHeader("Set-Cookie", [`id=${data[0].id};path=/`])
//     .status(200)
//     .json(data);
// }
