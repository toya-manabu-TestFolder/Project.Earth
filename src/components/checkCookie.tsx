import { useEffect, useState } from "react";

//cookieの有無をチェックする関数(カスタムホック）
export default function useUserId() {
  //↑カスタムホックで追加した部分
  const [userId, setUserId] = useState("");
  useEffect(() => {
    let idFoundCookie = document.cookie
      .split(/; */)
      .filter((ele) => ele.match(/id=.*/));
    //document.cookie.split(/; */).filter((ele) => ele.match(/id=.*/))[0].split('=')[1] if id=1が1桁だったらsplit
    let useId;
    if (idFoundCookie.length === 1) {
      useId = idFoundCookie[0].split("=")[1];
    } else {
      useId = false;
    }
    if (useId) {
      setUserId(userId);
    }
  }, []);
  //↓カスタムホックで追加した部分
  return userId;
}

//使う時↓
const cookie = useUserId();
