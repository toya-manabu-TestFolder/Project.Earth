import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import Link from "next/link";

export default function Complete() {
  return (
    <>
      <Head>
        <title>産チョク／商品購入完了画面</title>
      </Head>
      <header>
        <Header />
      </header>
      <main>
        <h1>商品購入が完了しました！</h1>
        <button type="submit"><Link href="/">TOPへ戻る</Link></button>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
