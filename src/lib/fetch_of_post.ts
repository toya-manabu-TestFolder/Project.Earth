type User = {
  name: string;
  email: string;
  password: string;
  zipcode: string;
  prefecture: string;
  city: string;
  address: string;
};

// バリデート？エラーパターンをつける
export default async function FetchOfPost(data: User, url: string) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(`/api/${url}`, options);
  console.log(response);
  const result = await response.json();
  console.log("result", result);
  return result;
}
// async関数の戻り値は強制的promiseの形になる。
