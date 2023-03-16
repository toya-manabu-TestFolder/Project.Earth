export async function fetchApiConnect(fetchUrl: string, postValue: any) {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: postValue,
  };
  let response = await fetch(fetchUrl, options);
  return response;
}
