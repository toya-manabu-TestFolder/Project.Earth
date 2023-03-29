import type { NextApiRequest, NextApiResponse } from "next";

// type Result = {
//   : string;
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { search, page } = req.query;
  const farmerDataLimit = 10;
  // if (typeof page !== "string") {
  //   return res.status(400).end();
  // }
  const farmerDataOffset = (Number(page) - 1) * 10;
  const url = `${process.env.DB_URL}/farmer_data?select=*,items!inner(*)&items.items_search=like.*${search}*&limit=${farmerDataLimit}&offset=${farmerDataOffset}`;
  const options = {
    method: "GET",
    headers: {
      apikey: `${process.env.DB_KEY}`,
      Authorization: `Bearer ${process.env.DB_KEY}`,
      "Content-Type": "application/json",
      Prefer: "count=exact",
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  const contentRangeHeader = response.headers.get("content-range");
  if (contentRangeHeader) {
    const itemAmount = Math.ceil(Number(contentRangeHeader.split("/")[1]) / 10);
    const itemAmountArr = Array(itemAmount).fill(itemAmount);
    const pageNumberArr = itemAmountArr.map((value: number, index: number) => {
      return index + 1;
    });
    const result = {
      data: data,
      pageNumberArr: pageNumberArr,
    };
    res.status(200).json(result);
  } else {
    res.status(200).json(data);
  }

  // データ確認用
<<<<<<< HEAD
=======
  // console.log("api", data);
>>>>>>> origin/main
}
