import Image from "next/image";
import useSWR from "swr";
import { useState } from "react";
import styles from "../styles/itemList.module.css";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Category({ onClick }: any) {
  const { data, error } = useSWR("http://127.0.0.1:8000/category", fetcher);

  if (error) return <div>エラーです</div>;
  if (!data) return <div>データがありません</div>;
  console.log("カテゴリー", data);

  return (
    <>
      <section className={styles.sec3}>
        <h2>その他関連商品</h2>
        <div className={styles.otherItems}>
          {data.map((category: CategoryData) => (
            <div className="category" key={category.id}>
              <button id={category.id} onClick={onClick}>
                <div className={styles.otherItem}>
                  <Image
                    src={category.image}
                    id={category.id}
                    alt="カテゴリー画像"
                    width={250}
                    height={250}
                    className={styles.sec3_ImageBox}
                  />
                </div>
                <p id={category.id}>{category.name}</p>
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

type CategoryData = {
  id: string;
  name: string;
  image: string;
};
