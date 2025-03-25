import { CartTotals, SectionTitle } from "../components";
import { CheckoutForm } from "../components/CheckoutForm";
import { useSelector } from "react-redux";
export const Checkout = () => {
  const cartItemCount = useSelector((state) => state.cartState.numItemsInCart);

  if (cartItemCount === 0) {
    return <SectionTitle text="Your cart is empty"></SectionTitle>;
  }
  return (
    <div className="flex justify-center ">
      <div className="m-8 grid gap-8 md:grid-cols-12 md:gap-4 max-w-5xl w-full">
        <div className="md:col-span-8">
          <CheckoutForm />
        </div>
        <div className="md:col-span-4">
          <CartTotals />
        </div>
      </div>
    </div>
  );
};
