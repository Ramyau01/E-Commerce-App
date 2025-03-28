import { useLoaderData } from "react-router-dom";
import { OrderItem } from "./OrderItem";
import { useSelector, useDispatch } from "react-redux";
import { clearFKOrders } from "../features/cart/cartSlice";
import { SectionTitle } from "./SectionTitle";
export const OrderList = () => {
  const { orders } = useLoaderData();
  const myntraItems = useSelector((state) => state.cartState.myntraProducts);
  const dispatch = useDispatch();
  const orderedItemsList = orders.map((order) => {
    const orderedItems = order.attributes.cartItems;

    if (myntraItems.length > 0) {
      dispatch(clearFKOrders());
      return [...myntraItems, ...orderedItems];
    } else {
      return orderedItems;
    }
  });

  return (
    <div className="mt-8">
      <SectionTitle title="total orders"></SectionTitle>

      <div>
        {orderedItemsList.map(([item], index) => {
          return <OrderItem key={index} order={item}></OrderItem>;
        })}
      </div>
    </div>
  );
};
