import ChangeAmount from "./changeAmount";
import Photo from "./Photo";
import PhotoName from "./photoName";

export default function CartItem() {
  return (
    <>
      <Photo />
      <PhotoName />
      <ChangeAmount />
    </>
  );
}
