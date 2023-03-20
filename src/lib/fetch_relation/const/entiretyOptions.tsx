// ServerSideRendering/ServerSideGeneration用
export async function getServerSide(query: string) {
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

// 全体用
// Post
export const postOption = (postValue: any) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Prefer: "return=representation",
      apikey: `${process.env["DB_KEY"]}`,
      Authorization: `Bearer ${process.env["DB_KEY"]}`,
    },
    body: JSON.stringify(postValue),
  };
};

// Get
export const getOption = () => {
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Prefer: "return=representation",
      apikey: `${process.env["DB_KEY"]}`,
      Authorization: `Bearer ${process.env["DB_KEY"]}`,
    },
  };
};

// Delete
export const deleteOption = () => {
  return {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Prefer: "return=representation",
      apikey: `${process.env["DB_KEY"]}`,
      Authorization: `Bearer ${process.env["DB_KEY"]}`,
    },
  };
};

// Put
export const putOption = (putValue: any) => {
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
};
