import { strapiFetch, fakestoreFetch } from "../utils/index";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { Hero } from "../components";
import { Categories } from "../components/Categories";
const strapiUrl = "/products?featured=true";

export const loader = async () => {
  console.log("running loader");
  const response = await strapiFetch(strapiUrl);
  console.log(response);
  const products = response.data.data;
  return { products };
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
