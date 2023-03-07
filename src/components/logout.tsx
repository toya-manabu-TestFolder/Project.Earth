import { SyntheticEvent } from "react";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

export default function Logout() {
  const router = useRouter();
  const handleSubmit = async () => {
    document.cookie = `id=; max-age=0`;
    if (router.asPath === "/") {
      router.reload();
    } else {
      router.push("/");
    }
  };

  return (
    <button onClick={handleSubmit} className={styles.button}>
      ログアウト
    </button>
  );
}
//ログアウトしたらページの更新かける
