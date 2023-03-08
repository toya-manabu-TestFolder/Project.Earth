/* eslint-disable react-hooks/rules-of-hooks */
// import IntoCart from "@/components/intoCart";
import Image from "next/image";
import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from "react";
import styles from "../../styles/itemList.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("http://127.0.0.1:8000/farmer_data");
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
  const req1 = await fetch("http://127.0.0.1:8000/farmer_data");
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
  const [cookie, setcookie] = useState({
    category_id: 0,
    user_id: 0,
  });
  // 商品一覧の表示切替用
  const [itemSelect, setitemSelect] = useState<number>();

  useEffect(() => {
    let cookie: any = document.cookie;
    let category = localStorage.getItem("category");
    console.log(cookie);
    if (document.cookie !== "") {
      let id = cookie.match("id=[0-9]")[0];
      id = id.substring(3);
      setcookie({
        ...cookie,
        user_id: Number(id),
      });
      setcartData({
        ...cartData,
        user_id: Number(id),
      });
    }
    console.log(category);
    setitemSelect(Number(category));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ログインユーザーのカート情報送信用
  const [cartData, setcartData] = useState({
    user_id: 0,
    item_id: 0,
    quantity: 0,
  });

  // ローカルストレージ用
  let [oneTimeStorage, setoneTimeStorage] = useState<any>({});
  let [storage, setstorage] = useState<any>([]);

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

  // Select選択後
  const itemQuantityChange = (
    e: any,
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    event.preventDefault();
    if (cookie.user_id === 0) {
      setoneTimeStorage({
        id: e.id,
        item: e,
        quantity: Number(event.target.value),
      });
    } else {
      setcartData({
        ...cartData,
        item_id: Number(e.id),
        quantity: Number(event.target.value),
      });
    }
  };

  // カートへボタン押下後
  useEffect(() => {
    if (cookie.user_id !== 0) {
      for (let i = 1; i <= cartData.quantity; i++) {
        fetch("http://localhost:3000/api/cartInport", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cartData),
        });
      }
    } else {
      if (localStorage.getItem(`${oneTimeStorage.id}`) !== null) {
        let test: any = localStorage.getItem(`${oneTimeStorage.id}`);
        test = JSON.parse(test);
        test[0].quantity = test[0].quantity + oneTimeStorage.quantity;
        test = JSON.stringify(test);
        localStorage.setItem(`${oneTimeStorage.id}`, test);
      } else if (storage.length > 0) {
        let item = storage;
        item = JSON.stringify(item);
        localStorage.setItem(`${oneTimeStorage.id}`, item);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storage]);

  function cartInport(
    e: any,
    event: /* eslint-disable react-hooks/rules-of-hooks */
    // import IntoCart from "@/components/intoCart";
    MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) {
    event.preventDefault();
    setstorage([oneTimeStorage]);
  }
  console.log(items);
  // 下記JSX
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
            農家歴&nbsp;&nbsp;{farmerData.year}年
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
                <div className={styles.imageBox}>
                  <Image
                    src={e.image}
                    width={250}
                    height={250}
                    className={styles.sec2_Image}
                    alt={"野菜画像"}
                  />
                </div>
                <div className={styles.nameBox}>
                  <p>{e.name}</p>
                </div>
                <div className={styles.priceBox}>
                  <p>価格&nbsp;&nbsp;{e.price}円</p>
                </div>
                <div className={styles.selectBox}>
                  <label htmlFor={e.id}>
                    数量&nbsp;&nbsp;
                    <select
                      className={styles.select}
                      id={e.id}
                      onChange={(event) => itemQuantityChange(e, event)}
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
                <div className={styles.buttonBox}>
                  <button onClick={(event) => cartInport(e, event)}>
                    <span className={styles.buttonString}>カートに入れる</span>
                  </button>
                </div>
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
                  <div>
                    <p>{categoryArr[index].name}の商品一覧</p>
                  </div>

                  <Image
                    src={categoryArr[index].image}
                    width={250}
                    height={250}
                    className={styles.sec3_ImageBox}
                    alt={"野菜画像"}
                  />
                </div>
              );
            }
          })}
        </div>
      </section>
    </div>
  );
}
