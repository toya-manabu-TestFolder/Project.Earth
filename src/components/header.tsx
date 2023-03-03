import Link from "next/link";
import { useEffect, useState } from "react";
import useUserId from "./checkCookie";
import Logout from "./logout";
import Search from "./search";

export default function Header() {
  const [cookie, setCookie] = useState(false);

  useEffect(() => {
    let cookie = document.cookie;
    setCookie(cookie);
  }, []);

  return (
    <>
      <main>
        <header>
          <span>
            <Link href="/">産チョク</Link>
          </span>
          <Search />
          <span>
            <Link href="/cart">カート</Link>
          </span>
          <span>
            {cookie && <Logout />}
            {!cookie && (
              <button>
                <Link href="/login">ログイン</Link>
              </button>
            )}
          </span>
        </header>
      </main>
    </>
  );
}
