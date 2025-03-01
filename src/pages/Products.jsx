import { Pagination, ProductsContainer } from "../components";
import { Filter } from "./Filter";
export const Products = () => {
  return (
    <div className="align-element">
      <Filter></Filter>
      <ProductsContainer></ProductsContainer>
      <Pagination></Pagination>
    </div>
  );
};
