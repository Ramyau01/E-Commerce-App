import { useSelector } from "react-redux";
import { FavItem } from "./FavItem";
export const FavList = () => {
  const wishListItems = useSelector(
    (state) => state.wishlistState.wishListItems
  );
  console.log(wishListItems);
  return (
    <div>
      {wishListItems.map((item) => {
        return <FavItem key={item.id} wishItem={item} />;
      })}
    </div>
  );
};
