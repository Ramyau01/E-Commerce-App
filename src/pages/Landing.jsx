import { strapiFetch, fakestoreFetch } from "../utils/index";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { Hero } from "../components";
import { Categories } from "../components/Categories";

const strapiUrl = "/products?featured=true";

export const loader = async () => {
  try {
    const response = await strapiFetch(strapiUrl);
    if (!response || !response.data) {
      throw new Error("Invalid response from server");
    }
    return { products: response.data.data };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { products: [] }; // Return an empty array to avoid errors
  }
};

export const Landing = () => {
  return (
    <section className="align-element py-8">
      <div>
        <Hero></Hero>
      </div>
      <Categories></Categories>
      <div>
        <FeaturedProducts></FeaturedProducts>
      </div>
    </section>
  );
};
