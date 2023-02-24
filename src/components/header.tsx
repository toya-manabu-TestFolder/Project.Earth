import Link from "next/link";
import Search from "./search";

export default function Header() {
  return (
    <>
      <main>
        <header>
          <span>
            <Link href="/">産チョク</Link>
          </span>
          {/* 検索欄を使う時はSearchファイルのコメントアウト解除してください */}
          <Search />
          <span>
            {/* リンクは仮 */}
            <Link href="/cart">カート</Link>
          </span>
          <span>
            {/* リンクは仮 */}
            <Link href="/login">ログイン</Link>
          </span>
        </header>
      </main>
    </>
  );
}
