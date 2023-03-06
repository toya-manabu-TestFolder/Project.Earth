import Link from "next/link";
import useSWR from "swr";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function NewFace() {
  const { data, error } = useSWR(`http://localhost:3000/api/newface`, fetcher);

  if (error) return <div>エラーです</div>;
  if (!data) return <div>データがないです</div>;
  console.log(data);

  return (
    <>
      <div className={styles.top_newFace}>
        {data.map((farmer) => {
          return (
            <div key={farmer.id}>
              <Link
                href={`http://localhost:3000/farmerPage/${farmer.id}`}
              ></Link>
              <Image
                src={farmer.icon_imageurl}
                alt={"農家画像"}
                width={100}
                height={100}
              />
              <p>農家名：{farmer.farm_name}</p>
              <p>農家名：{farmer.comment}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
