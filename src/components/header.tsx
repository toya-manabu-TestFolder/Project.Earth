import Link from "next/link";
import { useEffect, useState } from "react";
import Logout from "./logout";
import Search from "./search";
import styles from "../styles/header.module.css";

export default function Header() {
  const [cookie, setCookie] = useState<boolean>(false);

  useEffect(() => {
    let cookie: any = document.cookie;
    setCookie(cookie);
  });
  return (
    <>
      <main>
        <header className={styles.header}>
          <span className={styles.logo}>
            <Link href="/">産チョク</Link>
          </span>
          <Search />
          <nav>
            <ul className={styles.buttons}>
              <li className={styles.cart}>
                <Link href="/loginuserCartPage">カート</Link>
              </li>
              <li className={styles.logButton}>
                {cookie && <Logout />}
                {!cookie && (
                  <button>
                    <Link href="/login">ログイン</Link>
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
