import Link from "next/link";
import { useEffect, useState } from "react";
import Logout from "./logout";
import Search from "./search";
import styles from "../styles/header.module.css";
import { useRouter } from "next/router";
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";
import Image from "next/image";

export default function Header() {
  const [cookie, setCookie] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    let cookie: string = document.cookie;
    setCookie(cookie.includes("id="));
  }, [router.asPath]);
  //空[]だとリロード時のみ更新される、routerでパスを取ってきてパスが変わるごとに更新にする

  return (
    <>
      <header className={styles.header}>
        <div>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/site-image/site-logo.jpg"
              alt="ロゴ画像"
              width={80}
              height={80}
            ></Image>
          </Link>
          {/* <div className={styles.headerSearchForm}> */}
        </div>

        <div className={styles.flex}>
          <div>
            <Search />
          </div>
          <nav>
            <ul className={styles.navButtons}>
              <li className={styles.cartButton}>
                <IconContext.Provider
                  value={{ color: "#8f8f8f", size: "2.5rem" }}
                >
                  <Link
                    href={
                      cookie ? "/loginuserCartPage" : "/nologinuserCartPage"
                    }
                    className={styles.a_button}
                  >
                    <FaShoppingCart />
                  </Link>
                </IconContext.Provider>
              </li>
              <li className={styles.logButton}>
                {cookie && <Logout />}
                {!cookie && router.asPath !== "/login" && (
                  <button className={styles.button}>
                    <Link href="/login" className={styles.link}>
                      ログイン
                    </Link>
                  </button>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
