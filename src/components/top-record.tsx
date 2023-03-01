import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useState } from "react";

//SWRを使う　indexの中でこのコンポーネントのみCSRをするイメージ

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Record() {
  //   const [cookie, setCookie] = useState(" ");
  //   useEffect(() => {
  //     setCookie(document.cookie);
  //   }, []);

  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(cookie),
  //   };
  //   const response = await fetch("http://localhost:3000/api/top-record", options);
  //   console.log(response);
  //   const result = await response.json();
  //   console.log(result);
  const { data, error } = useSWR(
    `http://localhost:3000/api/top-record`,
    fetcher
  );

  if (error) return <div>エラーです</div>;
  if (!data) return <div>データがありません</div>;
  console.log(data);

  return (
    <>
      <p>{JSON.stringify(data)}</p>
    </>
  );
}
