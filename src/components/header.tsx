import Link from "next/link";

export default function Header() {
  return (
    <>
      <main>
        <header>
          <span><Link href="/">産チョク</Link></span>
          <label htmlFor="serchBox">
            商品名で生産者を探す
            <input type="text" id="serchBox" />
            検索
          </label>
          <button type="submit">検索</button>
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
