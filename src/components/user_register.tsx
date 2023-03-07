import { FormEvent, useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";

export default function User_register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [prefecture, setPrefecture] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
      zipcode: zipcode,
      prefecture: prefecture,
      city: city,
      address: address,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    //users.tsファイルを指定してる
    const response = await fetch("http://localhost:3000/api/users?", options);
    console.log(response);
    const result = await response.json();
    console.log(result);
  };

  return (
    <>
      <Head>
        <title>ユーザー登録画面</title>
      </Head>
      <main className="">
        <div className="">
          <form onSubmit={(event) => handleSubmit(event)} className="">
            <h1 className="">会員登録</h1>

            <div className="">
              <div className="">
                <label htmlFor="name" className=" ">
                  名前
                </label>
              </div>
              <div className="">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  className=""
                  placeholder="you@site.com"
                ></input>
              </div>
            </div>

            <div className="">
              <div className="">
                <label htmlFor="email" className="">
                  メールアドレス
                </label>
              </div>
              <div className="">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  id="email"
                  name="email"
                  className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="you@site.com"
                ></input>
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  htmlFor="password"
                  className=" block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                >
                  パスワード
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  id="password"
                  name="password"
                  className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="you@site.com"
                ></input>
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  htmlFor="zipcode"
                  className=" block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                >
                  郵便番号
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  onChange={(e) => setZipcode(e.target.value)}
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="you@site.com"
                ></input>
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  htmlFor="prefecture"
                  className=" block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                >
                  都道府県
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  onChange={(e) => setPrefecture(e.target.value)}
                  type="text"
                  id="prefecture"
                  className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="you@site.com"
                ></input>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  htmlFor="city"
                  className=" block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                >
                  市町村
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  id="city"
                  name="city"
                  className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="you@site.com"
                ></input>
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  htmlFor="address"
                  className=" block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                >
                  番地以降
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  id="address"
                  name="address"
                  className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="you@site.com"
                ></input>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="py-3 lg:py-3 px-14 lg:px-14 text-white-500 font-bold rounded-3xl bg-blue-400 hover:shadow-teal-md transition-all outline-none text-white"
              >
                登録
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* <main className="mt-40 mx-20">
        <div className="flex justify-center mt-32 mx-10 mb-10">
          <form
            onSubmit={(event) => handleSubmit(event)}
            className="w-full max-w-2xl"
          >
            <h1 className="text-2xl text-black font-bold text-center mb-5">
              会員登録
            </h1>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  htmlFor="name"
                  className=" block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                >
                  名前
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="you@site.com"
                ></input>
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  htmlFor="email"
                  className=" block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                >
                  メールアドレス
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  id="email"
                  name="email"
                  className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="you@site.com"
                ></input>
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  htmlFor="password"
                  className=" block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                >
                  パスワード
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  id="password"
                  name="password"
                  className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="you@site.com"
                ></input>
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  htmlFor="zipcode"
                  className=" block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                >
                  郵便番号
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  onChange={(e) => setZipcode(e.target.value)}
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="you@site.com"
                ></input>
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  htmlFor="prefecture"
                  className=" block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                >
                  都道府県
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  onChange={(e) => setPrefecture(e.target.value)}
                  type="text"
                  id="prefecture"
                  className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="you@site.com"
                ></input>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  htmlFor="city"
                  className=" block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                >
                  市町村
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  id="city"
                  name="city"
                  className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="you@site.com"
                ></input>
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  htmlFor="address"
                  className=" block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                >
                  番地以降
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  id="address"
                  name="address"
                  className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="you@site.com"
                ></input>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="py-3 lg:py-3 px-14 lg:px-14 text-white-500 font-bold rounded-3xl bg-blue-400 hover:shadow-teal-md transition-all outline-none text-white"
              >
                登録
              </button>
            </div>
          </form>
        </div>
      </main> */}
    </>
  );
}
