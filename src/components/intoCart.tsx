import { MouseEvent } from "react";

export default function IntoCart(props: any) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  const cartInport = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    // if (props.props.userID !== "") {
    //   fetch("http://localhost:8000/cartitems", {
    //     method: "POST",
    //     headers: headers,
    //     body: JSON.stringify(cartData),
    //   });
    // }
    console.log(props.props.itemQuantity);
  };
  return (
    <button name={props.itemName} type="submit" onClick={(e) => cartInport(e)}>
      カートに入れる
    </button>
  );
}
