import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.cookies;
  console.log("cookie", id);
  const url = `http://127.0.0.1:8000/sales?user_id=eq.1&select=farmer_data(farm_name,icon_imageurl),items(name,image)`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  res.status(200).json(data);
}
