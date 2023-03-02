import React from "react";
import useSWR from "swr";
import Header from "@/components/header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import handler from "./api/farmer";
import { useRouter } from "next/router";

const fetcher = (url: any) => fetch(url).then((res) => res.json());
export default function Farmers() {
  const router = useRouter();
  const { search } = router.query;
  const { data, error, isLoading } = useSWR(
    !search ? "/api/farmer" : `/api/farmer/?search=${search}`,
    fetcher
  );
  console.log(!data);
  if (error) return "エラーが発生しました";
  if (isLoading) return "ロード中";
  if (!data) return "検索結果がありません";
  return (
    <div>
      <Head>
        <title>検索結果</title>
      </Head>
      <header>
        <Header />
      </header>
      <main>
        <span>生産者検索結果:</span>
        <div>
          <div>
            {data.map((farmer: any) => {
              console.log(farmer);
              return (
                <>
                  <Link href={`http://localhost:3000/farmerPage/${farmer.id}`}>
                    <Image
                      src={farmer.icon_imageurl}
                      alt={"画像"}
                      width={100}
                      height={100}
                    />
                  </Link>
                  <div key={farmer.id}>
                    <p>{farmer.farm_name}</p>
                    <p>{farmer.comment}</p>
                  </div>
                  <figure>
                    <button type="button">
                      <audio controls src={farmer.voiceurl}></audio>
                    </button>
                  </figure>
                </>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
