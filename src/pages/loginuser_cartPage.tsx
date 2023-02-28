import Image from "next/image";
import styles from "../styles/cartpage.module.css";

// export const getServerSideProps = async () => {
//   const req1 = await fetch("http://127.0.0.1:8000/farmerdata");
//   const farmerdata = await req1.json();
//   const req2 = await fetch("http://127.0.0.1:8000/items");
//   const items = await req2.json();

//   return {
//     props: {
//       farmerdata,
//       items,
//     },
//   };
// };

const loginuser_cartPage = (props: any) => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR(`http://localhost:8000/items`, fetcher);
  const itemList = data;
  if (!data) return <div>散歩中...</div>;
  if (error) return <div>Failed to load</div>;

  // let cookie = {
  //   category_id: 2,
  //   user_id: "1",
  // };
  // console.log(props);
  return (
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

export default loginuser_cartPage;
function useSWR(
  arg0: string,
  fetcher: (url: string) => Promise<any>
): { data: any; error: any } {
  throw new Error("Function not implemented.");
}
