import { useSelector } from "react-redux";
import {
  CartItems,
  SectionTitle,
  CartItemsList,
  CartTotals,
} from "../components";
import { Link } from "react-router-dom";

import { EmptyContainer } from "../components";

export const Cart = () => {
  const user = useSelector((state) => state.userState.user);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  if (user === null && numItemsInCart < 1) {
    return (
      <div className="flex justify-center">
        <EmptyContainer component="Cart" />
      </div>
    );
  }

  if (numItemsInCart === 0) {
    return <SectionTitle title="Your cart is empty"></SectionTitle>;
  }
  return (
    <>
      <SectionTitle title="Shopping Cart"></SectionTitle>
      <div className="md:m-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList></CartItemsList>
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals></CartTotals>
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              Proceed to Checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
