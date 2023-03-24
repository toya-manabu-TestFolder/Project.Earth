export async function apiPost(bodyValue: any) {
  let apiOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyValue),
  };
  const res = await fetch(`/api/getFetchApi`, apiOptions);
  console.log(res);
  return await res.json();
}
