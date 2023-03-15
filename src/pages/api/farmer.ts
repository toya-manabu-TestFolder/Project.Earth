import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { search } = req.query;

  const url = `${process.env["NEXT_PUBLIC_URL"]}/farmer_data?select=*,items!inner(*)&items.items_search=like.*${search}*`;
  const options = {
    method: "GET",
    headers: {
      apikey: `${process.env["NEXT_PUBLIC_DB_KEY"]}`,
      Authorization: `Bearer ${process.env["NEXT_PUBLIC_DB_KEY"]}`,
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  res.status(200).json(data);
  // データ確認用
  // console.log(data);
}
