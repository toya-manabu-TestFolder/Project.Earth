import Image from "next/image";
import styles from "../styles/cartpage.module.css";

export const getServerSideProps = async () => {
  let cookie = {
    category_id: 2,
    user_id: "1",
  };

  const req1 = await fetch(`http://127.0.0.1:8000/cartitems`);
  const cartitems = await req1.json();
  const req2 = await fetch("http://127.0.0.1:8000/items");
  const items = await req2.json();

  return {
    props: {
      cartitems,
      items,
    },
  };
};

const deleteCartItem = () => {
  fetch();
};

const loginuser_cartPage = (props: any) => {
  let cookie = {
    category_id: 2,
    user_id: "1",
  };
  const items = props.items;
  const cartitems = props.cartitems;
  let check = [];
  // const cartitems = props.cartitems.filter((cartData: any) => {
  //   return Number(cookie.user_id) === cartData.user_id;
  // });
  console.log(cartitems);

  const price = (id) => {
    let val;
    items.map((item) => {
      if (id === item.id) {
        return (val = item.price);
      }
    });
    return val;
  };
  const name = (id) => {
    let val;
    items.map((item) => {
      if (id === item.id) {
        return (val = item.name);
      }
    });
    return val;
  };
  return (
    <div>
      {cartitems.map((item) => {
        if (check.includes(item.item_id)) {
          return;
        } else {
          let count = 1;
          for (const e of cartitems) {
            if (item.id !== e.id && item.item_id === e.item_id) {
              count = count + 1;
            }
          }
          check.push(item.item_id);
          return (
            <>
              <div>
                {/* 下記から商品情報 */}
                <div className={styles.section}>
                  <Image
                    src="/categoryImages/かぼちゃ.jpg"
                    width={100}
                    height={100}
                    className={styles.sec3_ImageBox}
                    alt={"野菜画像"}
                  />
                  <div>
                    <p>商品名:{name(item.item_id)}</p>
                  </div>
                  <div>
                    <p>価格:{price(item.item_id)}</p>
                  </div>

                  <div>
                    <label htmlFor={item.id}>
                      数量変更：
                      <select id={item.id} defaultValue={count}>
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
                    <button onClick={() => deleteCartItem()}>削除</button>
                  </div>
                </div>
                {/* 下記から小計表示と購入手続きボタン */}
              </div>
            </>
          );
        }
      })}
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

export default loginuser_cartPage;
