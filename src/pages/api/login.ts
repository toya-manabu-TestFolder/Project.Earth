import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, password } = req.body;
  const url = `http://127.0.0.1:8000/users?email=eq.${email}&password=eq.${password}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  res
    .setHeader("Set-Cookie", [`id=${data[0].id};path=/`])
    .status(200)
    .json(data);
  console.log(res);
}
