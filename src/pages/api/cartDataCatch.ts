import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const url = `http://127.0.0.1:8000/cartitems?select=*,items(*),users(*)`;
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options);
  const data = await response.json();
  res.status(200).json(data);
}
