import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";

export default function Create() {
  return (
    <div>
      <Head>
        <title>ユーザー登録画面</title>
      </Head>
      <div>
        <header>
          <Header />
        </header>
        <h1>会員情報登録</h1>
        <ul>
          <li>
            <label htmlFor="gender">性:&nbsp;</label>
            <input type="text" id="gender"></input>
          </li>
          <li>
            <label htmlFor="name">名:&nbsp;</label>
            <input type="text" id="name"></input>
          </li>
          <li>
            <label htmlFor="birthday">生年月日:&nbsp;</label>
            <input type="text" id="birthday"></input>
          </li>
          <li>
            <label htmlFor="postCode">
              郵便番号
              {/* 検索機能をつける */}
              <button type="submit">郵便番号検索</button>
              :&nbsp;
            </label>
            <input type="text" id="postCode"></input>
          </li>
          <li>
            <label htmlFor="pref">住所(都道府県):&nbsp;</label>
            <input type="text" id="pref"></input>
          </li>
          <li>
            <label htmlFor="city">住所(市区町村):&nbsp;</label>
            <input type="text" id="city"></input>
          </li>
          <li>
            <label htmlFor="address">住所(番地):&nbsp;</label>
            <input type="text" id="address"></input>
          </li>
          <li>
            <label htmlFor="apartment">
              住所(アパート名・マンション名):&nbsp;
            </label>
            <input type="text" id="apartment"></input>
          </li>
          <li>
            <button type="submit">住所から郵便番号を検索</button>
          </li>
          <li>
            <label htmlFor="mail">メールアドレス:&nbsp;</label>
            <input type="text" id="mail"></input>
          </li>
        </ul>
        <button type="submit">登録</button>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
