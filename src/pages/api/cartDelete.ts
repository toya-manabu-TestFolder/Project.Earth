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
  const url = `${process.env["NEXT_PUBLIC_URL"]}/cartitems?user_id=eq.${req.body.user_id}&item_id=eq.${req.body.item_id}`;
  const options = {
    method: "DELETE",
    headers: {
      apikey: `${process.env["NEXT_PUBLIC_DB_KEY"]}`,
      Authorization: `Bearer ${process.env["NEXT_PUBLIC_DB_KEY"]}`,
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  res.status(200).json(data);
}
