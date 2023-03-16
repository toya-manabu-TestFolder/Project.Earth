import Image from "next/image";
import useSWR from "swr";
import { useState } from "react";
import styles from "../styles/category.module.css";
import { fetcher } from "@/lib/fecher";

export default function Category({ onClick }: any) {
  const { data, error } = useSWR("api/category", fetcher);
  if (error) return <div>エラーです</div>;
  if (!data) return <div>データがありません</div>;
  // データ確認用
  // console.log("カテゴリー", data);

  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.title}>商品カテゴリー</h2>
        <div className={styles.picture}>
          {data.map((category: CategoryData) => (
            <div className="category" key={category.id}>
              <div id={category.id} onClick={onClick}>
                <div className={styles.shape}>
                  <Image
                    src={category.image}
                    id={category.id}
                    alt="カテゴリー画像"
                    width={250}
                    height={250}
                    className={styles.img}
                  />
                </div>
                <p id={category.id} className={styles.text}>
                  {category.name}
                </p>
              </div>
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
