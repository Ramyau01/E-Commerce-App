import { useSelector } from "react-redux";
import { CartItems } from "./CartItems";
export const CartItemsList = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);
  return (
    <>
      <div>
        {cartItems.map((item) => {
          return <CartItems key={item.cartID} cartItem={item} />;
        })}
      </div>
    </>
  );
};
