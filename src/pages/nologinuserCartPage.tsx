/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/cartpage.module.css";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

// ------------------------------------------

const loginuser_cartPage = () => {
  const router = useRouter();
  // ローカルストレージの整理
  const [cartData, setcartData] = useState<any>([]);

  useEffect(() => {
    let storage: any = [];
    for (let i = 0; i < localStorage.length; i++) {
      let num = localStorage.key(i);
      if (num !== "ally-supports-cache") {
        let test: any = localStorage.getItem(`${num}`);
        test = JSON.parse(test);
        for (let i = 1; i <= test[0].quantity; i++) {
          storage.push(test[0]);
        }
      }
    }
    setcartData(
      storage.map((e: any) => {
        return e;
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let data = cartData;

  // // // 削除用ファンクション
  const deleteCartItem = (
    event: /* eslint-disable react-hooks/rules-of-hooks */
    MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    item: any
  ) => {
    // event.preventDefault();

    localStorage.removeItem(`${item.item.id}`);
  };

  // // 数量変更ファンクション
  const changeItemQuantity = (
    event: ChangeEvent<HTMLSelectElement>,
    item: any
  ) => {
    let changeStorage: any = [
      {
        id: item.id,
        item: item.item,
        quantity: Number(event.target.value),
      },
    ];
    changeStorage = JSON.stringify(changeStorage);
    localStorage.removeItem(`${item.item.id}`);
    localStorage.setItem(`${item.item.id}`, changeStorage);
  };

  // // 小計変数
  const totalPrice = data.reduce((sum: any, item: { item: { price: any } }) => {
    return sum + item.item.price;
  }, 0);

  // 遷移先
  const checkLogin = () => {
    localStorage.setItem("cartPage", "true");
    router.push("http://localhost:3000/relogin");
  };
  let check: number[] = [];
  // 下記JSX
  return (
    <div className={styles.main}>
      {data.map((item: any) => {
        if (check.includes(item.item.id)) {
          return;
        } else {
          let count = 0;
          for (const e of data) {
            if (item.item.id === e.item.id) {
              count = count + 1;
            }
          }
          check.push(item.item.id);
          return (
            <>
              {/* 下記から商品情報 */}
              <div key={item.item.id} className={styles.itemBox}>
                <form>
                  <div className={styles.flex}>
                    <div>
                      <Image
                        src="/categoryImages/かぼちゃ.jpg"
                        width={200}
                        height={200}
                        className={styles.image}
                        alt={"野菜画像"}
                      />
                    </div>
                    <div>
                      <div>
                        <p>商品名:{item.item.name}</p>
                      </div>
                      <div>
                        <p>価格:{item.item.price}</p>
                      </div>

                      <div>
                        <label htmlFor={item.item.id}>
                          数量変更：
                          <select
                            id={item.item.id}
                            defaultValue={count}
                            onChange={(event) =>
                              changeItemQuantity(event, item)
                            }
                            className={styles.selectBox}
                          >
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                          </select>
                        </label>
                      </div>
                      <div>
                        <button
                          className={styles.deleteButton}
                          onClick={(event) => deleteCartItem(event, item)}
                        >
                          削除
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </>
          );
        }
      })}
      {/* 下記から小計表示と購入手続きボタン */}
      <div className={styles.subTotalBox}>
        <div>
          <p>合計金額:&nbsp;{totalPrice}円</p>
        </div>
        <div>
          <button className={styles.purchase} onClick={() => checkLogin()}>
            購入手続きへ
          </button>
        </div>
      </div>
    </div>
  );
};

export default loginuser_cartPage;
