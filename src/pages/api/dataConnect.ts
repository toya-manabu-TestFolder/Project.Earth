import type { NextApiRequest, NextApiResponse } from "next";
import * as entiretyOptions from "@/lib/fetch_relation/const/entiretyOptions";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    let request = await fetch(
      `${process.env["DB_URL"]}/cartitems?user_id=eq.${req.body.bodyValue.user_id}&item_id=eq.${req.body.bodyValue.item_id}`,
      entiretyOptions.getOption()
    );
    let data = await request.json();
    // 数量変更
    if (data.length > 0) {
      let value = {
        user_id: data[0].user_id,
        item_id: data[0].item_id,
        quantity: req.body.bodyValue.quantity,
      };
      let response = await fetch(
        `${process.env["DB_URL"]}/cartitems?user_id=eq.${data[0].user_id}&item_id=eq.${data[0].item_id}`,
        entiretyOptions.patchOption(value)
      );
      const patchData = await response.json();
      res.status(200).json(patchData);
    } else {
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
  } else {
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
}
