import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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