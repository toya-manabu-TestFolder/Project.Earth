import styles from "@/styles/cartpage.module.css";
import { fetcher } from "@/lib/fecher";
import useSWR from "swr";

const TotalPlice = () => {
  const { data, error, isLoading } = useSWR(`/api/`, fetcher);
  if (error) return "エラーが発生しました";
  if (isLoading) return "ロード中";

  return (
    <div>
      <h3>お届け先情報</h3>
      <div className={styles.infomation}>
        <ul>
          <li>たぬき様</li>
          <li>&#12306;&nbsp;890-0034</li>
          <li>鹿児島県&nbsp;&nbsp; 鹿児島市</li>
          <li>猫8丁目</li>
        </ul>
      </div>
      <div className={styles.totalBox}>
        <p>
          合計金額&nbsp;&nbsp;
          <span className={styles.total}>10</span>円
        </p>
      </div>
      <div className={styles.submitBox}>
        <button type="submit" role="link" className={styles.purchase}>
          購入手続きへ
        </button>
      </div>
    </div>
  );
};

export default TotalPlice;
