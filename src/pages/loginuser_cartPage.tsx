/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import styles from "../styles/cartpage.module.css";
import { useState } from "react";
import useSWR from "swr";

// export const getServerSideProps = async () => {
//   const req1 = await fetch("http://127.0.0.1:8000/cartitems");
//   const cartitems = await req1.json();
//   const req2 = await fetch("http://127.0.0.1:8000/items");
//   const items = await req2.json();

//   return {
//     props: {
//       cartitems,
//       items,
//     },
//   };
// };

// ------------------------------------------
const loginuser_cartPage = (props: any) => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/cartDataCatch", fetcher);
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  console.log(data);

  // let cookie = {
  //   category_id: 2,
  //   user_id: 1,
  // };
  // カート情報送信用のuseState
  // const [cartData, setcartData] = useState({
  //   user_id: Number(cookie.user_id),
  //   item_id: 0,
  //   quantity: 0,
  // });

  // const items = props.items;
  // const cartitems = props.cartitems;
  // let check = [];
  // const cartitemsArr = props.cartitems.filter((cartData: any) => {
  //   return Number(cookie.user_id) === cartData.user_id;
  // });
  // console.log(cartitems);
  // console.log(cartitemsArr);

  // 価格表示用ファンクション
  // const price = (id) => {
  //   let val;
  //   items.map((item) => {
  //     if (id === item.id) {
  //       return (val = item.price);
  //     }
  //   });
  //   return val;
  // };
  // 名前表示用ファンクション
  // const name = (id) => {
  //   let val;
  //   items.map((item) => {
  //     if (id === item.id) {
  //       return (val = item.name);
  //     }
  //   });
  //   return val;
  // };

  // 削除用ファンクション
  // const deleteCartItem = async (id) => {
  //   let deleteParam = {
  //     user_id: Number(cookie.user_id),
  //     item_id: id,
  //     quantity: 0,
  //   };
  //   fetch("http://localhost:3000/api/cartDelete", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       //↓全部のデータを取り扱いたい時
  //       Prefer: "return=representation",
  //       //↓更新したいならTOKEN設定
  //       Authorization: `Bearer ${process.env["POSTGREST_API_TOKEN"]}`,
  //     },
  //     body: JSON.stringify(deleteParam),
  //   });
  // };

  // 数量変更ファンクション
  // const changeItemQuantity = (event, id) => {
  //   deleteCartItem(id);
  //   let cartInport = {
  //     user_id: cookie.user_id,
  //     item_id: id,
  //     quantity: 0,
  //   };

  //   for (let i = 1; i <= event.target.value; i++) {
  //     fetch("http://localhost:3000/api/cartInport", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(cartInport),
  //     });
  //   }
  // };

  // 下記JSX
  return (
    <></>
    // <div>
    //   {cartitemsArr.map((item) => {
    //     if (check.includes(item.item_id)) {
    //       return;
    //     } else {
    //       let count = 1;
    //       for (const e of cartitemsArr) {
    //         if (item.id !== e.id && item.item_id === e.item_id) {
    //           count = count + 1;
    //         }
    //       }
    //       check.push(item.item_id);
    //       return (
    //         <>
    //           <form>
    //             <div>
    //               {/* 下記から商品情報 */}
    //               <div className={styles.section}>
    //                 <Image
    //                   src="/categoryImages/かぼちゃ.jpg"
    //                   width={100}
    //                   height={100}
    //                   className={styles.sec3_ImageBox}
    //                   alt={"野菜画像"}
    //                 />
    //                 <div>
    //                   <p>商品名:{name(item.item_id)}</p>
    //                 </div>
    //                 <div>
    //                   <p>価格:{price(item.item_id)}</p>
    //                 </div>

    //                 <div>
    //                   <label htmlFor={item.id}>
    //                     数量変更：
    //                     <select
    //                       id={item.id}
    //                       defaultValue={count}
    //                       onChange={(event) =>
    //                         changeItemQuantity(event, item.item_id)
    //                       }
    //                     >
    //                       <option value="0">0</option>
    //                       <option value="1">1</option>
    //                       <option value="2">2</option>
    //                       <option value="3">3</option>
    //                       <option value="4">4</option>
    //                       <option value="5">5</option>
    //                       <option value="6">6</option>
    //                       <option value="7">7</option>
    //                       <option value="8">8</option>
    //                       <option value="9">9</option>
    //                       <option value="10">10</option>
    //                     </select>
    //                   </label>
    //                 </div>
    //                 <div>
    //                   <button onClick={() => deleteCartItem(item.item_id)}>
    //                     削除
    //                   </button>
    //                 </div>
    //               </div>
    //               {/* 下記から小計表示と購入手続きボタン */}
    //             </div>
    //           </form>
    //         </>
    //       );
    //     }
    //   })}
    //   <div>
    //     <div>
    //       <p>小計&nbsp;19円</p>
    //     </div>
    //     <div>
    //       <button>購入手続き</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default loginuser_cartPage;
