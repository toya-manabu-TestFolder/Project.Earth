import { Get } from "@/lib/fetchRelation/const/apiFetchrs";
import type { NextApiRequest, NextApiResponse } from "next";

// カート関連のみ。
// 必要条件はカートPOST、DELETE、PATCH
export default async function cartDataEdit(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req);
  const data = await Get(`/farmer_data?select=*,items(*)&id=eq.1`);
  return res.status(200).json(data);
}
