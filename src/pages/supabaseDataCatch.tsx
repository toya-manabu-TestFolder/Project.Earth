/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr";

const supabaseDataCatch = () => {
  const fetcher = (url: any) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/supabasuApi",
    fetcher
  );
  if (error) return "エラーが発生しました";
  if (isLoading) return "ロード中";

  console.log(data);

  return <div>Enter</div>;
};

export default supabaseDataCatch;
