//ここからpostgrestに送る
//リクエスト受け取ったものが正しいか確認

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = `${process.env["NEXT_PUBLIC_URL"]}/cartitems`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Prefer: "return=representation",
      Authorization: `Bearer ${process.env["NEXT_PUBLIC_DB_KEY"]}`,
    },
    //JSONをJS変換
    body: JSON.stringify(req.body),
  };
  const response = await fetch(url, options);
  const data = await response.json();
  res.status(200).json(data);
}
