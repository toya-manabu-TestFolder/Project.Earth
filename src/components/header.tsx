import Link from "next/link";
import { useEffect, useState } from "react";
import useUserId from "./checkCookie";
import Logout from "./logout";
import Search from "./search";
import styles from "../styles/header.module.css";

export default function Header() {
  const [cookie, setCookie] = useState<boolean>();

  useEffect(() => {
    let cookie: any = document.cookie;
    setCookie(cookie);
  }, []);

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
                {!cookie && (
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
