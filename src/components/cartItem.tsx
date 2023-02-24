import ChangeAmount from "./changeAmount";
import Photo from "./photo";
import PhotoName from "./photoName";

export default function CartItem() {
    return(
        <>
        <Photo />
        <PhotoName />
        <ChangeAmount/>
        </>
    )
}
