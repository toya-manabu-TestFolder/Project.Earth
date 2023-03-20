export function putOption(putValue: any) {
  return {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Prefer: "return=representation",
      apikey: `${process.env["DB_KEY"]}`,
      Authorization: `Bearer ${process.env["DB_KEY"]}`,
    },
    body: JSON.stringify(putValue),
  };
}
