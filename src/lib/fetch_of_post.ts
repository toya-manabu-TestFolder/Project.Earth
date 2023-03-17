type User = {
  name: string;
  email: string;
  password: string;
  zipcode: string;
  prefecture: string;
  city: string;
  address: string;
};

export default async function FetchOfPost(data: User) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch("/api/users?", options);
  console.log(response);
  const result = await response.json();
  console.log(result);
  return result;
}
// async関数の戻り値は強制的promiseの形になる。
