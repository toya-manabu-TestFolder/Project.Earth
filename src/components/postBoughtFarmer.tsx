import Farmer from "@/components/farmer";
import Photo from "@/components/photo";
import IntoCart from "./intoCart";
import PhotoName from "./photoName";

export default function PostBoughtFarmer() {
  return (
    <>
      <Farmer />
      <Photo />
      <PhotoName />
      <IntoCart />
    </>
  );
}
