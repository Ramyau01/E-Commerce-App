import { editItem, removeItem } from "../features/cart/cartSlice";
import { addItemToWishlist } from "../features/wishlist/wishlistSlice";
import { generateAmountOptions, formatPrice } from "../utils";
import { useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { DropdownButton } from "../components";
export const CartItems = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { cartID, title, price, image, qty, company, productColor } = cartItem;
  console.log(cartItem);
  function handleQuantity(e) {
    dispatch(editItem({ cartID, qty: parseInt(e.target.value) }));
  }
  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }));
  };

  const saveToWish = () => {
    dispatch(removeItem({ cartID }));
    dispatch(addItemToWishlist({ product: cartItem }));
  };
  return (
    <article
      key={cartID}
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
          {formatPrice(price)}
        </p>
        {/* TITLE */}
        <h3 className="capitalize font-medium text-lg text-primary">{title}</h3>
        {/* COMPANY */}
        <h4 className=" capitalize text-md">{company}</h4>
        {/* COLOR */}
        <p className="mt-2 text-md capitalize flex items-center gap-x-2 ">
          color
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
        {/* AMOUNT  and Add to favorites*/}
        <div className="mt-2 flex flex-col sm:flex-row gap-4">
          <div className="form-control max-w-xs flex flex-row gap-4">
            <div>
              <label htmlFor="Quantity" className="label p-0 ">
                <p className="text-md">Quantity</p>
              </label>
            </div>
            <div>
              <select
                name="Quantity"
                id="qty"
                className="select select-base select-bordered select-sm max-w-14"
                value={qty}
                onChange={handleQuantity}
              >
                {generateAmountOptions(qty + 5)}
              </select>
            </div>
          </div>
          <div>
            <button className="btn btn-primary btn-sm" onClick={saveToWish}>
              Save for later
            </button>
          </div>
        </div>
        {/* REMOVE */}

        <button
          className="btn btn-ghost text-xl absolute top-1 right-1"
          onClick={removeItemFromTheCart}
        >
          <FaTimes></FaTimes>
        </button>
      </div>
    </article>
  );
};
