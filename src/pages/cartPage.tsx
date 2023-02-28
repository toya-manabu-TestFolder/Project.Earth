import Image from "next/image";

const cartPage = () => {
  return (
    <div>
      <div>
        <div>{/* <Image /> */}</div>
        <div>
          <p>価格</p>
        </div>
        <div>
          <select>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default cartPage;
