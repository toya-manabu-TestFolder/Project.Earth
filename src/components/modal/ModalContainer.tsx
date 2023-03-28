import styles from "../../styles/itemList.module.css";
import useSWR from "swr";

// export const getServerSideProps = async () => {
//   const farmerItems = await Get(`/farmer_data?select=*,items(*)&id=eq.1`);
//   console.log(farmerItems);
//   return {
//     props: {
//       farmerItems,
//     },
//   };
// };

export function Modal({
  show,
  setShow,
  mode,
}: {
  show: boolean;
  setShow: any;
  mode: string;
}) {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR("/api/SWR/modal", fetcher);
  // if (error) return "エラーが発生しました";
  // if (isLoading) return "ロード中";

  console.log(data);

  const closeModal = () => {
    setShow(false);
  };
  if (show && mode === "completed") {
    return (
      <div className={styles.overlay} onClick={closeModal}>
        <div className={styles.content}>
          <p>カートに追加しました。</p>
        </div>
      </div>
    );
  }
  // if (show && mode === "selectItem") {
  //   return (
  //     <div className={styles.sec2_itemSelect} key={e.id}>
  //       <div className={styles.imageBox}>
  //         <Image
  //           src={item.image}
  //           width={250}
  //           height={250}
  //           className={styles.sec2_Image}
  //           alt={"野菜画像"}
  //         />
  //       </div>
  //       <div className={styles.nameBox}>
  //         <p>{item.name}</p>
  //       </div>
  //       <div className={styles.priceBox}>
  //         <p>価格&nbsp;&nbsp;{item.price}円</p>
  //       </div>
  //       {/* con */}
  //       <div className={styles.selectBox}>
  //         <label htmlFor={item.id}>
  //           数量&nbsp;&nbsp;
  //           <select
  //             className={styles.select}
  //             id={item.id}
  //             onChange={(event) => itemQuantityChange(item, event)}
  //           >
  //             <option value="0">0</option>
  //             <option value="1">1</option>
  //             <option value="2">2</option>
  //             <option value="3">3</option>
  //             <option value="4">4</option>
  //             <option value="5">5</option>
  //             <option value="6">6</option>
  //             <option value="7">7</option>
  //             <option value="8">8</option>
  //             <option value="9">9</option>
  //             <option value="10">10</option>
  //           </select>
  //         </label>
  //       </div>
  //     </div>
  //   );
  // }

  return null;
}
