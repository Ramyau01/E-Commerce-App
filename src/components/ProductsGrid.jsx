import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";
import { SubmitButton } from "./SubmitButton";

export const ProductsGrid = () => {
  const { products } = useLoaderData();

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => {
        const { title, image, price, description } = product.attributes;
        const dollarAmount = formatPrice(price);
        return (
          <Link
            to={`/product/strapi/${product.id}`}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300  "
            key={product.id}
          >
            <figure className="h-32 sm:h-48">
              <img
                src={image}
                alt={description}
                className="rounded-b-none  h-full w-full object-cover"
              />
            </figure>
            <div className="flex flex-col items-center text-center  p-0">
              <h2 className="text-lg leading-8 capitalize">{title}</h2>
              <p className="text-black font-semibold">{dollarAmount}</p>
              {/* <div className="my-2">
                <SubmitButton
                  text="Add to cart"
                  style="px-8"
                 
                ></SubmitButton> */}
              {/* </div> */}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
