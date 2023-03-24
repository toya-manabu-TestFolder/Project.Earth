import { Get } from "@/lib/fetch_relation/const/apiFetchrs";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function getFetchApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let data = await Get(req.body.query);
  res.status(200).json(data);
}
