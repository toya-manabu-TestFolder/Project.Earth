import Link from "next/link";
import { useEffect, useState } from "react";
import Logout from "./logout";
import Search from "./search";

export default function Header() {
  const [cookie, setCookie] = useState<boolean>(false);

  useEffect(() => {
    let cookie: any = document.cookie;
    setCookie(cookie);
  });
  return (
    <>
      <main>
        <header>
          <span>
            <Link href="/">産チョク</Link>
          </span>
          <Search />
          <span>
            <Link href="/loginuserCartPage">カート</Link>
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
