/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import styles from "../styles/cartpage.module.css";
import { ChangeEvent } from "react";
import { cookieType } from "@/typedata/typescript";

// ------------------------------------------
const loginuser_cartPage = () => {
  const router = useRouter();
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/cartDataCatch", fetcher);
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  // クッキー情報格納予定
  let cookie: cookieType = {
    category_id: 2,
    user_id: 1,
  };
  console.log(localStorage.getItem("cartData"));
  let check: number[] = [];
  // 削除用ファンクション
  const deleteCartItem = async (id: number) => {
    let deleteParam = {
      user_id: Number(cookie.user_id),
      item_id: id,
      quantity: 0,
    };
    fetch("http://localhost:3000/api/cartDelete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //↓全部のデータを取り扱いたい時
        Prefer: "return=representation",
        //↓更新したいならTOKEN設定
        Authorization: `Bearer ${process.env["POSTGREST_API_TOKEN"]}`,
      },
      body: JSON.stringify(deleteParam),
    });
  };

  // 数量変更ファンクション
  const changeItemQuantity = (
    event: ChangeEvent<HTMLSelectElement>,
    id: number
  ) => {
    let cartInport = {
      user_id: cookie.user_id,
      item_id: id,
      quantity: 0,
    };

    fetch("http://localhost:3000/api/cartDelete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //↓全部のデータを取り扱いたい時
        Prefer: "return=representation",
        //↓更新したいならTOKEN設定
        Authorization: `Bearer ${process.env["POSTGREST_API_TOKEN"]}`,
      },
      body: JSON.stringify(id),
    })
    .then((res)=>{
      if(res.status===200){
        for (let i = 1; i <= Number(event.target.value); i++) {
          fetch("http://localhost:3000/api/cartinport", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(cartInport),
          })
      }
    }
    )
    }
  };

  // 小計変数
  const totalPrice = data.reduce(
    (sum: any, item: { items: { price: any } }) => {
      return sum + item.items.price;
    },
    0
  );

  const checkLogin = () => {
    if (cookie.user_id === undefined) {
      // ログインページへ。
    }
    router.push("http://localhost:3000/purchaseConfirmed");
  };
  // 下記JSX
  return (
    <>
      <div className={styles.main}>
        {data.map((item: any) => {
          if (check.includes(item.item_id)) {
            return;
          } else {
            let count = 1;
            for (const e of data) {
              if (item.id !== e.id && item.item_id === e.item_id) {
                count = count + 1;
              }
            }
            check.push(item.item_id);
            return (
              <>
                {/* 下記から商品情報 */}
                <div key={item.iten_id} className={styles.itemBox}>
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
                          <p>商品名:{item.items.name}</p>
                        </div>
                        <div>
                          <p>価格:{item.items.price}</p>
                        </div>

                        <div>
                          <label htmlFor={item.id}>
                            数量変更：
                            <select
                              id={item.id}
                              defaultValue={count}
                              onChange={(event) =>
                                changeItemQuantity(event, item.item_id)
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
                            </select>
                          </label>
                        </div>
                        <div>
                          <button
                            className={styles.deleteButton}
                            onClick={() => deleteCartItem(item.item_id)}
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
    </>
  );
};

export default loginuser_cartPage;
