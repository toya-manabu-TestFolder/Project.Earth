import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PostBoughtFarmer from "@/components/postBoughtFarmer";
import Search from "@/components/search";
import Farmer from "@/components/farmer";
import Photo from "@/components/Photo";
import PhotoName from "@/components/photoName";
import Record from "@/components/top-record";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>産チョク</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="top_cover"></div>
        <div className="top_purchase_history">
          <Record />
        </div>
        <div className="top_search">
          <Search />
        </div>
        <div className="top_category">
          <p>生産者を探す</p>
          <Photo />
          <PhotoName />
        </div>
        <div className="top_recommend">
          <Farmer />
        </div>
      </main>
      <Footer />
    </>
  );
}
