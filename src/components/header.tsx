import Link from "next/link";
import { useEffect, useState } from "react";
import useUserId from "./checkCookie";
import Logout from "./logout";
import Search from "./search";
import styles from "../styles/header.module.css";
import { useRouter } from "next/router";

export default function Header() {
  const [cookie, setCookie] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    let cookie: string = document.cookie;
    setCookie(cookie.includes("id="));
  }, [router.asPath]);
  //karadatoriro-dojinomi、ルーターでパスを取る

  return (
    <>
      <main>
        <header className={styles.header}>
          <Link href="/">
            <img
              className={styles.logo}
              src="/site-image/site-logo.jpg"
              alt="ロゴ画像"
              width={80}
              height={80}
            />
          </Link>
          <div className={styles.headerSearchForm}>
            <Search />
          </div>
          <nav>
            <ul className={styles.navButtons}>
              <li className={styles.cartButton}>
                <button>
                  <Link
                    href={
                      cookie ? "/loginuserCartPage" : "/nologinuserCartPage"
                    }
                  >
                    <span>カート</span>
                  </Link>
                </button>
              </li>
              <li className={styles.logButton}>
                {cookie && <Logout />}
                {!cookie && router.asPath !== "/login" && (
                  <button>
                    <Link href="/login">
                      <span>ログイン</span>
                    </Link>
                  </button>
                )}
              </li>
            </ul>
          </nav>
        </header>
      </main>
    </>
  );
}
