import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeItemFromWishlist } from "../features/wishlist/wishlistSlice";
import { addItem } from "../features/cart/cartSlice";
import { formatPrice } from "../utils";

export const FavItem = ({ wishItem }) => {
  const dispatch = useDispatch();
  console.log(wishItem);
  const { id, image, title, price, qty, company, productColor } = wishItem;
  const cartProduct = {
    cartID: `${id}${productColor || "#ffffff"}`,
    productID: id,
    image,
    title,
    price,
    qty: 1,
    productColor: productColor || "#ffffff",
    company,
  };

  const dollarsAmount = formatPrice(price);
  const removeItemFromWish = () => {
    dispatch(removeItemFromWishlist({ id }));
  };
  const addItemToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(removeItemFromWishlist({ id }));
    dispatch(addItem({ product: cartProduct }));
  };
  return (
    <article
      key={id}
      className="mb-4  flex p-4 gap-12 relative shadow-lg rounded-md"
    >
      <div>
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="h-32 w-32 rounded-lg sm:h-32 sm:w-32 object-cover"
        />
      </div>
      <div>
        {/* PRICE */}
        <p className="font-bold sm:ml-auto text-xl leading-8">
          {dollarsAmount}
        </p>
        {/* TITLE */}
        <h3 className="capitalize font-medium text-lg text-primary">{title}</h3>
        {/* COMPANY */}
        <h4 className=" capitalize text-md">{company}</h4>

        {/* AMOUNT  and Add to favorites*/}
        <div className="mt-2 flex flex-col sm:flex-row gap-4">
          <div>
            <button className="btn btn-primary btn-sm" onClick={addItemToCart}>
              Add to Cart
            </button>
          </div>
        </div>
        {/* REMOVE */}

        <button
          className="btn btn-ghost text-xl absolute top-1 right-1"
          onClick={removeItemFromWish}
        >
          <FaTimes></FaTimes>
        </button>
      </div>
    </article>
  );
};
