import React from "react";
import useSWR from "swr";
import Farmer from "@/components/farmer";
import Header from "@/components/header";
import Head from "next/head";
// import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function farmers() {
  const fetcher = (url: string) => {
    return fetch(url).then((res) => res.json());
  };

  const { data, error, isLoading } = useSWR(
    "http://127.0.0.1:8000/farmerdata",
    fetcher
  );
  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

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
            <div>
              {data.map((e: any) => {
                return (
                  <>
                    <div key={e.id}>
                      <p>{e.farm_name}</p>
                    </div>
                    <Link href={`http://localhost:3000/farmerPage/${e.id}`}>
                      <Image
                        src={e.icon_imageurl}
                        alt={"画像"}
                        width={100}
                        height={100}
                      />
                    </Link>
                  </>
                );
              })}
            </div>

            <p>ここにコメントが入る</p>
            <figure>
              <button type="button">
                <audio controls src="/決定ボタンを押す4.mp3"></audio>
              </button>
            </figure>
          </div>
        </div>
      </main>
    </div>
  );
  //   return <p>{JSON.stringify(router.query)}</p>;
}
