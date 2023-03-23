//ここからpostgrestに送る
//リクエスト受け取ったものが正しいか確認

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = `${process.env.DB_URL}/users`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //↓POSTの時はこれ
      Prefer: "return=representation",
      //↓更新したいならTOKEN設定
      Authorization: `Bearer ${process.env.DB_KEY}`,
      apikey: `${process.env.DB_KEY}`,
    },
    //JSONをJS変換
    body: JSON.stringify(req.body),
  };
  const response = await fetch(url, options);
  const data = await response.json();
  // console.log(data);
  res.status(200).json(data);
}
