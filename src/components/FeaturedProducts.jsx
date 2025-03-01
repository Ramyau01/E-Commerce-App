import { ProductsGrid } from "./ProductsGrid";
import { SectionTitle } from "./SectionTitle";
export const FeaturedProducts = () => {
  return (
    <section>
      <div>
        <SectionTitle title="Featured Products"></SectionTitle>
        <div className="">
          <ProductsGrid></ProductsGrid>
        </div>
      </div>
    </section>
  );
};
