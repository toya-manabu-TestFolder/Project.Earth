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
  const url = `${process.env.DB_URL}/cartitems?user_id=eq.${req.body.user_id}&item_id=eq.${req.body.item_id}`;
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Prefer: "return=representation",
      apikey: `${process.env.DB_KEY}`,
      Authorization: `Bearer ${process.env.DB_KEY}`,
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  res.status(200).json(data);
}
