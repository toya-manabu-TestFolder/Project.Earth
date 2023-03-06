import styles from "../styles/Home.module.css";
import Image from "next/image";
import Search from "@/components/search";
import Record from "@/components/top-record";
import Category from "@/components/category";
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
      <main>
        <section>
          <div className={styles.top_cover}>
            <div
              className={styles.cover_image}
              style={{
                backgroundImage: "url(/coverImages/cover1.jpg)",
              }}
            ></div>
          </div>
          <div className="cover-text">
            農家さんの顔見て、
            <br />
            欲しいものを選べるECサイトです
          </div>
        </section>

        <section className="top_record">
          <div className={styles.top_title}>前回購入された商品と農家さん</div>
          {cookie && <Record />}
        </section>

        <section className="top_search">
          <div className={styles.top_title}>商品名から生産者を探す</div>
          <Search />
        </section>

        <section>
          <Category />
        </section>

        <section className="top_newFace">
          <div className={styles.top_title}>新規のおすすめ農家さん</div>
          <NewFace />
        </section>
      </main>
    </>
  );
}
