//ここからpostgrestに送る
//リクエスト受け取ったものが正しいか確認

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = `${process.env["NEXT_PUBLIC_URL"]}/users`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //↓全部のデータを取り扱いたい時
      Prefer: "return=representation",
      //↓更新したいならTOKEN設定
      Authorization: `Bearer ${process.env["NEXT_PUBLIC_DB_KEY"]}`,
      apikey: `${process.env["NEXT_PUBLIC_DB_KEY"]}`,
    },
    //JSONをJS変換
    body: JSON.stringify(req.body),
  };
  const response = await fetch(url, options);
  const data = await response.json();
  res.status(200).json(data);
}
