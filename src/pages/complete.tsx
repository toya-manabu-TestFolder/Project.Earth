import Head from "next/head";
import Link from "next/link";
import styles from "../styles/complete.module.css";

export default function Complete() {
  return (
    <>
      <Head>
        <title>産チョク／商品購入完了画面</title>
      </Head>
      <main>
        <section className={styles.message}>
          <h1>商品購入が完了しました！</h1>
          <h3>
            ご購入いただきありがとうございます。商品の到着までお待ち下さい。
          </h3>
        </section>
        <button type="submit">
          <Link href="/">TOPへ戻る</Link>
        </button>
      </main>
    </>
  );
}
