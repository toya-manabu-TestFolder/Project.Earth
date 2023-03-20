import type { NextApiRequest, NextApiResponse } from "next";
import { putOption } from "@/components/fetchOptions/putOption";
import { getOption } from "@/components/fetchOptions/getOption";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    let request = await fetch(
      `${process.env["DB_URL"]}/cartitems?user_id=eq.${req.body.user_id}`,
      getOption()
    );
    let data = await request.json();
    if (data !== null) {
      for (const e of data) {
        if (req.body.bodyValue.item_id === e.item_id) {
          // put処理を記載。そもそもGETの段階で対象ユーザーの対象商品を取り出せば、繰り返し処理が必要ない。
          let value = {
            id: e.id,
            user_id: e.user_id,
            item_id: e.item_id,
            quantity: req.body.bodyValue.quantity + e.quantity,
          };
          let res = await fetch(
            `${process.env["DB_URL"]}/cartitems`,
            putOption(value)
          );
        }
      }
    }
  }
  const url = `${process.env["DB_URL"]}${req.body.queryValue}`;
  const options = {
    method: `${req.body.methodValue}`,
    headers: {
      "Content-Type": "application/json",
      Prefer: "return=representation",
      apikey: `${process.env["DB_KEY"]}`,
      Authorization: `Bearer ${process.env["DB_KEY"]}`,
    },
    body: JSON.stringify(req.body.bodyValue),
  };
  const response = await fetch(url, options);
  const data = await response.json();
  res.status(200).json(data);
}
