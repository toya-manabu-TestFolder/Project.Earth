/* eslint-disable react-hooks/rules-of-hooks */
// import IntoCart from "@/components/intoCart";
import Image from "next/image";
import { ChangeEvent, MouseEvent, useState } from "react";
import styles from "../../styles/itemList.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("http://127.0.0.1:8000/farmerdata");
  const data = await res.json();
  const paths = data.map((item: any) => {
    return {
      params: {
        id: String(item.id),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: { params: any }) => {
  const req1 = await fetch("http://127.0.0.1:8000/farmerdata");
  const farmerdata = await req1.json();
  const req2 = await fetch("http://127.0.0.1:8000/items");
  const items = await req2.json();
  const req3 = await fetch("http://127.0.0.1:8000/category");
  const category = await req3.json();
  return {
    props: {
      params,
      farmerdata,
      items,
      category,
    },
  };
};
//  --------------------------↓getStaticPropsで作ったprops: {item}
export default function page(props: any) {
  // 持っているcookieによって商品一覧変更。
  let cookie = {
    category_id: 2,
    user_id: "1",
  };
  // 商品一覧の表示切替用useState
  const [itemSelect, setitemSelect] = useState(cookie.category_id);
  // カート情報送信用のuseState
  const [cartData, setcartData] = useState({
    user_id: Number(cookie.user_id),
    item_id: 0,
    quantity: 0,
  });

  //   id◎
  const id = Number(props.params.id);
  // 対象農家情報取得◎
  const farmerData = props.farmerdata[id - 1];
  // 対象商品全て取得◎
  let items = props.items.filter((item: any) => {
    return item.farmer_id === id;
  });
  // 重複カテゴリーidの商品削除◎
  const categoryItem = Array.from(
    new Map(items.map((item: any) => [item.category_id, item])).values()
  );
  // 対象カテゴリー名取得◎
  const categoryArr = categoryItem.map((e: any) => {
    for (const el of props.category) {
      if (e.category_id === el.id) {
        return el;
      }
    }
  });
  // 対象カテゴリーの商品取得
  const itemfunction = () => {
    items = items.filter((e: any) => {
      return e.category_id === itemSelect;
    });
  };
  itemfunction();
  //  その他関連商品クリックでの表示切り替え関数。
  const changeItem = (id: any) => {
    setitemSelect(id);
    itemfunction();
  };

  const itemQuantityChange = (
    e: { id: any },
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    setcartData({
      ...cartData,
      item_id: Number(e.id),
      quantity: Number(event.target.value),
    });
  };

  function cartInport(
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) {
    event.preventDefault();
    for (let i = 1; i <= cartData.quantity; i++) {
      fetch("http://localhost:3000/api/cartInport", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartData),
      });
    }
  }

  return (
    <div
      className={styles.All}
      style={{ backgroundImage: `url(${farmerData.cover_imageurl})` }}
    >
      <div className={styles.farmerMain}>
        <div
          className={styles.farmerCoverImg}
          style={{
            backgroundImage: `url(${farmerData.icon_imageurl})`,
          }}
        ></div>
        <section className={styles.sec1}>
          <h2 className={styles.farmName}>{farmerData.farm_name}</h2>
          <p className={styles.representative}>
            代表&nbsp;&nbsp;{farmerData.representative_name}
          </p>
          <p className={styles.farmYears}>
            農家歴&nbsp;&nbsp;{farmerData.years}年
          </p>
        </section>
      </div>

      <div className={styles.farmer_career}>
        <pre>{farmerData.carryr}</pre>
      </div>

      <section className={styles.sec2}>
        <h2>商品一覧</h2>
        <div className={styles.items}>
          {items.map((e: any) => {
            return (
              <div className={styles.sec2_itemSelect} key={e.id}>
                <form method="POST">
                  <Image
                    src={e.image}
                    width={250}
                    height={250}
                    className={styles.sec2_ImageBox}
                    alt={"野菜画像"}
                  />
                  <div>
                    <p>{e.name}</p>
                  </div>
                  <div>
                    <p>価格:&nbsp;{e.price}円</p>
                  </div>
                  <div>
                    <label htmlFor={e.id}>
                      数量:&nbsp;
                      <select
                        id={e.id}
                        onChange={(event) => itemQuantityChange(e, event)}
                      >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </label>
                  </div>
                  <button onClick={(event) => cartInport(event)}>
                    カートに入れる
                  </button>
                </form>
              </div>
            );
          })}
        </div>
      </section>
      <section className={styles.sec3}>
        <h2>その他関連商品</h2>
        <div className={styles.otherItems}>
          {categoryItem.map((e: any, index) => {
            if (e.category_id !== itemSelect) {
              return (
                <div
                  className={styles.otherItem}
                  key={e.id}
                  onClick={() => changeItem(e.category_id)}
                >
                  <Image
                    src={categoryArr[index].image}
                    width={250}
                    height={250}
                    className={styles.sec3_ImageBox}
                    alt={"野菜画像"}
                  />
                  <div>
                    <p>{categoryArr[index].name}の商品一覧</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>
    </div>
  );
}
