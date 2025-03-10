import { useSelector } from "react-redux";
import { formatPrice } from "../utils";

export const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );

  return (
    <div className="card bg-base-300">
      <div className="card-body">
        {/* SUBTOTAL */}
        <p className="flex justify-between text-md border-b border-base-300 pb-2">
          <span>Subtotal</span>
          <span className="font-medium">{formatPrice(cartTotal)}</span>
        </p>
        {/* SHIPPING */}
        <p className="flex justify-between text-md border-b border-base-300 pb-2">
          <span>Shipping</span>
          <span className="font-medium">{formatPrice(shipping)}</span>
        </p>
        {/* Tax */}
        <p className="flex justify-between text-md border-b border-base-300 pb-2">
          <span>Tax</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </p>
        {/* Total */}
        <p className="mt-4 flex justify-between text-md  pb-2">
          <span className="font-bold text-md">Order Total</span>
          <span className="font-bold text-md">{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
};
