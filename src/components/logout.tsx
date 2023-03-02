import { SyntheticEvent } from "react";

export default function Logout() {
  const handleSubmit = async () => {
    document.cookie = `id=; max-age=0`;
  };

  return <button onClick={handleSubmit}>ログアウト</button>;
}
