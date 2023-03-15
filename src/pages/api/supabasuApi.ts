import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const url = `${process.env["NEXT_PUBLIC_URL"]}/farmer_data`;
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
}
