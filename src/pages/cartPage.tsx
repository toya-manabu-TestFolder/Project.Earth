import Image from "next/image";
import styles from "../styles/cartpage.module.css";

const cartPage = () => {
  return (
    <div>
      {/* 下記から商品情報 */}
      <div className={styles.section}>
        <div>{/* <Image /> */}</div>
        <div>
          <p>価格</p>
        </div>
        <div>
          <label htmlFor="">
            数量変更：
            <select>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
        </div>
        <div>
          <button>削除</button>
        </div>
      </div>
      {/* 下記から小計表示と購入手続きボタン */}
      <div>
        <div>
          <p>小計&nbsp;19円</p>
        </div>
        <div>
          <button>購入手続き</button>
        </div>
      </div>
    </div>
  );
};

export default cartPage;
