import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useState } from "react";
import Image from "next/image";

//SWRを使う　indexの中でこのコンポーネントのみCSRをするイメージ

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Record() {
  const { data, error } = useSWR(
    `http://localhost:3000/api/top-record`,
    fetcher
  );

  if (error) return <div>エラーです</div>;
  if (!data) return <div>データがありません</div>;
  console.log("履歴", data);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(data);

    const cartData = {
      user_id: 1,
      item_id: data[0].items.id,
      quantity: 1,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartData),
    };
    const response = await fetch(
      "http://localhost:3000/api/cartInport",
      options
    );
    console.log(response);
    const result = await response.json();
    console.log(result);
  };

  return (
    <>
      <div>
        <p>前回購入された商品と農家さん</p>
        <p>{`農家名：${data[0].farmer_data.farm_name}`}</p>
        <Image
          src={data[0].farmer_data.icon_imageurl}
          alt={"画像"}
          width={100}
          height={100}
        />
      </div>
      <div>
        <form onSubmit={(event) => handleSubmit(event)}>
          <p>{`商品名：${data[0].items.name}`}</p>
          {/* <Image
          src={data[0].items.image}
          alt={"画像"}
          width={100}
          height={100}
        /> */}
          <button type="submit"> カートに入れる </button>
        </form>
      </div>
    </>
  );
}
