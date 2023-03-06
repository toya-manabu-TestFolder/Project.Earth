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

  return (
    <>
      <div className={styles.container}>
        <div>
          <div>
            <Image
              src={data[0].farmer_data.icon_imageurl}
              alt={"画像"}
              width={300}
              height={200}
            />
          </div>
          <p>{`農家名：${data[0].farmer_data.farm_name}`}</p>
        </div>
        <div>
          <div>
            <Image
              src={data[0].items.image}
              alt={"画像"}
              width={250}
              height={250}
            />
          </div>
          <p>{`商品名：${data[0].items.name}`}</p>
        </div>
      </div>
      <button>ボタン</button>
    </>
  );
}
