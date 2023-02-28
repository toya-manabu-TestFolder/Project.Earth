import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

//SWRを使う　indexの中でこのコンポーネントのみCSRをするイメージ

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Record() {
  let cookie = document.cookie;
  const { data, error } = useSWR(
    `http://127.0.0.1:8000/sales?id=eq.${cookie}`,
    fetcher
  );

  if (error) return <div>エラーです</div>;
  if (!data) return <div>データがありません</div>;
  console.log(data);

  return (
    <>
      <p></p>
    </>
  );
}
