import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { search } = req.query;

  const url = `http://127.0.0.1:8000/farmer_data?select=*,items!inner(*)&items.items_search=like.*${search}*`;
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options);
  const data = await response.json();
  res
    .setHeader("Set-Cookie", [
      `category=${data[0].items[0].category_id};path=/`,
    ])
    .status(200)
    .json(data);
}
