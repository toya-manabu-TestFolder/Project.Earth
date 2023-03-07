import React from "react";
import useSWR from "swr";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/farmers.module.css";
import { Voice } from "@/components/voice";

const fetcher = (url: any) => fetch(url).then((res) => res.json());
export default function Farmers() {
  const router = useRouter();
  const { search } = router.query;
  const { data, error, isLoading } = useSWR(
    !search ? "/api/farmer" : `/api/farmer/?search=${search}`,
    fetcher
  );
  if (error) return "エラーが発生しました";
  if (isLoading) return "ロード中";

  if (data.length !== 0) {
    localStorage.setItem("category", `${data[0].items[0].category_id}`);
  }

  return (
    <div>
      <Head>
        <title>検索結果</title>
      </Head>
      <main>
        <h1 className={styles.resultMessage}>生産者検索結果:</h1>
        <div>
          {data.length === 0 && (
            <section className={styles.blankMessage}>
              <div>
                <h2>検索結果がありませんでした。</h2>
                <br />
                入力内容をお確かめの上、もう一度検索をお願いします。
                <br />
                （検索例）キャベツ、にんじん、なす、かぼちゃ...
              </div>
            </section>
          )}
          <div className={styles.result}>
            {data.map((farmer: any) => {
              return (
                <div className={styles.resultBlock} key={farmer.id}>
                  <Link href={`http://localhost:3000/farmerPage/${farmer.id}`}>
                    <Image
                      className={styles.image}
                      src={farmer.icon_imageurl}
                      alt={"画像"}
                      width={264}
                      height={264}
                    />
                  </Link>
                  <div>
                    <h2 className={styles.farmerName}>{farmer.farm_name}</h2>
                    <p className={styles.comment}>{farmer.comment}</p>
                  </div>

                  <div>
                    <Voice src={farmer.voiceurl} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
