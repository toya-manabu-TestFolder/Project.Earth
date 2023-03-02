import Link from "next/link";
import useSWR from "swr";
import Image from "next/image";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function NewFace() {
  const { data, error } = useSWR(`http://localhost:3000/api/newface`, fetcher);

  if (error) return <div>エラーです</div>;
  if (!data) return <div>データがないです</div>;
  console.log(data);

  return (
    <>
      <div>新着の農家さん</div>
      {data.map((farmer) => {
        return (
          <div key={farmer.id}>
            <Link href={`http://localhost:3000/farmerPage/${farmer.id}`}></Link>
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
    </>
  );
}
