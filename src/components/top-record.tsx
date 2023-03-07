import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/record.module.css";

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
      <div className={styles.container}>
        <div className={styles.half_one}>
          <div className={styles.height}>
            <Image
              src={data[0].farmer_data.icon_imageurl}
              alt={"画像"}
              width={300}
              height={200}
              className={styles.img}
            />
          </div>
          <p className="text-center">{`${data[0].farmer_data.farm_name}`}</p>
        </div>
        <div className={styles.half_two}>
          <form
            onSubmit={(event) => handleSubmit(event)}
            className={styles.center}
          >
            <Image
              src={data[0].items.image}
              alt={"画像"}
              width={250}
              height={250}
              className="m-auto"
            />
            <p className="text-center">{`${data[0].items.name}`}</p>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                カートに入れる
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
