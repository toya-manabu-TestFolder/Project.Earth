import { SyntheticEvent } from "react";
import { useRouter } from "next/router";

export default function Logout() {
  const router = useRouter();
  const handleSubmit = async () => {
    document.cookie = `id=; max-age=0`;
    router.push("/");
  };

  return <button onClick={handleSubmit}>ログアウト</button>;
}
//ログアウトしたらページの更新かける
