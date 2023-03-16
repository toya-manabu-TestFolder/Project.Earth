import { clientValueType } from "@/types/typescript";

// ServerSideRendering/ServerSideGeneration用

export async function getValue(query: string) {
  let options = {
    method: "GET",
    headers: {
      apikey: `${process.env["DB_KEY"]}`,
      Authorization: `Bearer ${process.env["DB_KEY"]}`,
    },
  };
  const res = await fetch(`${process.env["DB_URL"]}${query}`, options);
  return await res.json();
}

// クライアント側からのapifetch
export function postValue(
  queryValue: string,
  userValue: number,
  itemValue: number,
  quantityValue: number
) {
  let postValue = {
    method: "POST",
    query: queryValue,
    user: userValue,
    item: itemValue,
    quantityNumber: quantityValue,
  };
  return postValue;
}

export function deleteValue(queryValue: string) {
  let deleteValue = {
    method: "DELETE",
    query: queryValue,
    user: 0,
    item: 0,
    quantityNumber: 0,
  };
  return deleteValue;
}

export async function fetchApiConnect(clientValue: clientValueType) {
  let apiOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
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
