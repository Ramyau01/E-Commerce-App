import { useSelector } from "react-redux";
import { FavList, SectionTitle } from "../components";

export const Wishlist = () => {
  const user = null;
  const numItemsInWishList = useSelector(
    (state) => state.wishlistState.numItemsInWishList
  );

  if (numItemsInWishList === 0) {
    return <SectionTitle title="Your Wishlist is empty"></SectionTitle>;
  }
  return (
    <>
      <SectionTitle title="Wishlist"></SectionTitle>
      <div className="m-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <FavList></FavList>
        </div>
      </div>
    </>
  );
};
