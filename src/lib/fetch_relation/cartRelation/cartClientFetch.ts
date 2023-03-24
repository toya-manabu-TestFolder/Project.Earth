import { clientValueType } from "@/types/typescript";

export async function cartClientFetch(clientValue: clientValueType) {
  let apiOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // 下記情報をdataConnetctで活用
    body: JSON.stringify({
      methodValue: clientValue.method,
      queryValue: clientValue.query,
      bodyValue: {
        user_id: clientValue.user,
        item_id: clientValue.item,
        quantity: clientValue.quantityNumber,
      },
    }),
  };
  let response = await fetch("/api/dataConnect", apiOptions);
  return response;
}
