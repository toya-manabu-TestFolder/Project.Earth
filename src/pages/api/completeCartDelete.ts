//ここからpostgrestに送る
//リクエスト受け取ったものが正しいか確認

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.body);
  const url = `http://127.0.0.1:8000/cartitems?user_id=eq.${req.body.user_id}`;
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      //↓全部のデータを取り扱いたい時
      Prefer: "return=representation",
      //↓更新したいならTOKEN設定
      Authorization: `Bearer ${process.env["POSTGREST_API_TOKEN"]}`,
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  res.status(200).json(data);
}
