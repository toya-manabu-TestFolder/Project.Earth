/* eslint-disable react-hooks/rules-of-hooks */
import React, { SyntheticEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/cartpage.module.css";
import { ChangeEvent, useEffect, useState } from "react";
import { clientFetch } from "@/lib/fetch_relation/ClientFetch/clientFetch";
import * as entiretyOptions from "@/lib/fetch_relation/const/entiretyOptions";
import * as clientFetchBodys from "@/lib/fetch_relation/ClientFetch/clientFetchBodys";

export async function getServerSideProps(context: {
  req: { cookies: { id: any } };
}) {
  const data = await entiretyOptions.getServerSide(
    "/cartitems?select=*,items(*)"
  );
  const user = await entiretyOptions.getServerSide(
    `/users?id=eq.${context.req.cookies.id}`
  );
  return {
    props: {
      data,
      user,
    },
  };
}
// ------------------------------------------
const loginuser_cartPage = (props: any) => {
  let data = props.data;
  const user = props.user[0];
  const id = props.user[0].id;
  data = data.filter((e: { user_id: any }) => {
    return e.user_id === id;
  });

  const router = useRouter();
  useEffect(() => {
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

  // -----------------------------------------------------------------------------------------
  // 削除用ファンクション
  const deleteCartItem = async (
    e: /* eslint-disable react-hooks/rules-of-hooks */
    React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item_id: number
  ) => {
    e.preventDefault();
    clientFetch(
      clientFetchBodys.deleteValue(
        `/cartitems?user_id=eq.${id}&item_id=eq.${item_id}`
      )
    ).then((res: any) => {
      if (res.status === 200) {
        router.push("/loginuserCartPage");
      }
    });
  };
  // -----------------------------------------------------------------------------------------
  // 数量変更ファンクション
  const changeItemQuantity = (
    event: ChangeEvent<HTMLSelectElement>,
    item_id: number
  ) => {
    clientFetch(
      clientFetchBodys.deleteValue(
        `/cartitems?user_id=eq.${id}&item_id=eq.${item_id}`
      )
    ).then((res: any) => {
      if (res.status === 200) {
        for (let i = 1; i <= Number(event.target.value); i++) {
          clientFetch(
            clientFetchBodys.postValue(`/cartitems`, id, item_id, 0)
          ).then((res: any) => console.log(res.status));
        }
        router.push("/loginuserCartPage");
      }
    });
  };
  // -----------------------------------------------------------------------------------------

  // 小計変数
  const totalPrice = data.reduce(
    (sum: any, item: { items: { price: any } }) => {
      return sum + item.items.price;
    },
    0
  );
  // -----------------------------------------------------------------------------------------

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
  // -----------------------------------------------------------------------------------------

  // 決済画面へのデータ送信;
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
  // -----------------------------------------------------------------------------------------
  let check: number[] = [];

  // 下記JSX
  return (
    <>
      <div className={styles.main}>
        <div className={styles.itemList}>
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
                  <div key={item.id} className={styles.itemBox}>
                    <div className={styles.flex}>
                      <div className={styles.imageBox}>
                        <Image
                          src={item.items.image}
                          width={200}
                          height={200}
                          className={styles.image}
                          alt={"野菜画像"}
                        />
                      </div>
                      <div className={styles.discriptionBox}>
                        <div className={styles.nameBox}>
                          <p> 商品名&nbsp;:&nbsp;{item.items.name}</p>
                        </div>
                        <div className={styles.priceBox}>
                          <p>価格&nbsp;:&nbsp;{item.items.price}</p>
                        </div>
                        {/* con */}
                        <div className={styles.selectBox}>
                          <label htmlFor={item.id}>
                            数量変更&nbsp;:&nbsp;
                            <select
                              id={item.id}
                              defaultValue={count}
                              onChange={(event) =>
                                changeItemQuantity(event, item.item_id)
                              }
                              className={styles.select}
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
                        {/* con */}
                        <div className={styles.buttonBox}>
                          <button
                            className={styles.deleteButton}
                            onClick={(e) => deleteCartItem(e, item.item_id)}
                          >
                            カートから削除
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            }
          })}
        </div>
        {/* 下記から小計表示と購入手続きボタン */}
        <div className={styles.fixedBox}>
          <div className={styles.subTotalBox}>
            <form
              action="/api/checkout_sessions"
              onSubmit={checkoutItems}
              method="POST"
            >
              <div>
                <h3>お届け先情報</h3>
                <div className={styles.infomation}>
                  <ul>
                    <li>{user.name}&nbsp;様</li>
                    <li>&#12306;&nbsp;{user.zipcode}</li>
                    <li>
                      {user.prefecture}&nbsp;&nbsp;
                      {user.city}
                    </li>
                    <li>{user.address}</li>
                  </ul>
                </div>
                <div className={styles.totalBox}>
                  <p>
                    合計金額&nbsp;&nbsp;
                    <span className={styles.total}>{totalPrice}</span>円
                  </p>
                </div>
                <div className={styles.submitBox}>
                  <button type="submit" role="link" className={styles.purchase}>
                    購入手続きへ
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default loginuser_cartPage;
