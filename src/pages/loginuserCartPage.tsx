/* eslint-disable react-hooks/rules-of-hooks */
import React, { SyntheticEvent } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import styles from "../styles/cartpage.module.css";
import { ChangeEvent, useEffect, useState } from "react";
import { cookieType } from "@/typedata/typescript";
import { count } from "console";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);
// ------------------------------------------
const loginuser_cartPage = () => {
  const router = useRouter();
  const [cookie, setcookie] = useState({
    category_id: 2,
    user_id: 0,
  });
  useEffect(() => {
    if (document.cookie !== null) {
      let id = document.cookie.substring(3);
      setcookie({
        ...cookie,
        user_id: Number(id),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps

    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/cartDataCatch", fetcher);
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  // クッキー情報格納予定
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
      body: JSON.stringify(cartInport),
    }).then((res) => {
      if (res.status === 200) {
        for (let i = 1; i <= Number(event.target.value); i++) {
          fetch("http://localhost:3000/api/cartInport", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(cartInport),
          });
        }
      }
    });
  };

  // 小計変数
  const totalPrice = data.reduce(
    (sum: any, item: { items: { price: any } }) => {
      return sum + item.items.price;
    },
    0
  );

  let objcheck: number[] = [];

  let checkoutData = data.map(
    (item: { item_id: number; items: { price: any; name: any } }) => {
      if (objcheck.includes(item.item_id)) {
        return;
      } else {
        let count = 0;
        for (const e of data) {
          if (item.item_id === e.item_id) {
            count = count + 1;
          }
        }
        let obj = {
          price_data: {
            unit_amount: item.items.price,
            currency: "jpy",
            product_data: {
              name: item.items.name,
            },
          },
          quantity: count,
        };
        objcheck.push(item.item_id);
        return obj;
      }
    }
  );
  checkoutData = checkoutData.filter((e: undefined) => {
    return e !== undefined;
  });

  // 決済画面へのデータ送信
  const checkoutItems = (e: SyntheticEvent) => {
    e.preventDefault();

    if (checkoutData.length === 0) return false;

    fetch("/api/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(checkoutData),
    })
      .then((res) => {
        console.log("status", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("response body", JSON.stringify(data));
        router.push(data.redirectUrl);
      })
      .catch((err) => console.error("Failed to fetch", err));
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
                <div key={item.item_id} className={styles.itemBox}>
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
        <form
          action="/api/checkout_sessions"
          onSubmit={checkoutItems}
          method="POST"
        >
          <div className={styles.subTotalBox}>
            <div>
              <p>合計金額:&nbsp;{totalPrice}円</p>
            </div>
            <div>
              <button type="submit" role="link" className={styles.purchase}>
                購入手続きへ
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default loginuser_cartPage;
