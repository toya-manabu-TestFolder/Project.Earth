import React from "react";
import useSWR from "swr";
import Header from "@/components/header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import handler from "./api/farmer";

// export const getStaticPaths = async () => {
//   const res = await fetch("http://127.0.0.1:8000/category");
//   const data = await res.json();
//   const paths = data.map((item: any) => {
//     return {
//       params: {
//         id: String(item.id),
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: true,
//   };
// };
// export const getStaticProps = async ({ params }: { params: any }) => {
//   const req1 = await fetch("http://127.0.0.1:8000/farmerdata");
//   const farmerData = await req1.json();
//   const req2 = await fetch("http://127.0.0.1:8000/items");
//   const items = await req2.json();
//   return {
//     props: {
//       params,
//       farmerData,
//       items,
//     },
//   };
// };
// export default function Farmers(props: any) {
//   const farmerData = props.farmerData;
//   const items = props.items;
//   // console.log(farmerData);
//   // console.log(items);

const fetcher = (url: any) => fetch(url).then((res) => res.json());
export default function Farmers() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/farmer",
    fetcher
  );
  console.log(data);
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
            {/* {data.map((e: any) => {
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
              })} */}
          </div>
          <div>
            {/* itemsテーブルにコメントを挿入後使ってください。 */}
            {/* {items.map((e: any) => {
                return (
                  <div key={e.id}>
                    <p>{e.comment}</p>
                  </div>
                );
              })} */}
          </div>
          <div>
            {/* {farmerData.map((e: any) => {
                return (
                  <figure>
                    <button type="button">
                      <audio controls src={e.voiceurl}></audio>
                    </button>
                  </figure>
                );
              })} */}
          </div>
        </div>
      </main>
    </div>
  );
}
