import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Search from "@/components/search";
import Record from "@/components/top-record";
import Category from "@/components/category";
import Logout from "@/components/logout";
import { useEffect, useState } from "react";
import NewFace from "@/components/newface";

export default function Home() {
  const [cookie, setCookie] = useState(false);

  useEffect(() => {
    let cookie: any = document.cookie;
    setCookie(cookie);
  }, []);

  return (
    <>
      <Head>
        <title>産チョク</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="top_cover"></div>
        {cookie && (
          <div className="top_record">
            <Record />
          </div>
        )}
        <div className="top_search">
          <Search />
        </div>
        <div className="top_category">
          <p>生産者を探す</p>
          <Category />
        </div>
        <div className="top_newFace">
          <NewFace />
        </div>
      </main>
    </>
  );
}
