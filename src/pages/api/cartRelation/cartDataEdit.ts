import { Delete, Patch, Post } from "@/lib/fetch_relation/const/fetch";
import type { NextApiRequest, NextApiResponse } from "next";

// カート関連のみ。
// 必要条件はカートPOST、DELETE、PATCH
export default async function cartDataEdit(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.body.methodValue === "POST") {
    Post(req.body.bodyValue, `${process.env["DB_URL"]}/cartitems`);
  }
  if (req.body.methodValue === "PATCH") {
    Patch(
      req.body.bodyValue,
      `${process.env["DB_URL"]}/cartitems?user_id=eq.${req.body.bodyValue.user_id}&item_id=eq.${req.body.bodyValue.item_id}`
    );
  }
  if (req.body.methodValue === "DELETE") {
    Delete(
      `${process.env.DB_URL}/cartitems?user_id=eq.${req.body.bodyValue.user_id}&item_id=eq.${req.body.bodyValue.item_id}`
    );
  }
}
