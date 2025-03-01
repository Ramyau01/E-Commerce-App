import { Link, useLoaderData } from "react-router-dom";
import { formatFakeStorePrice, formatPrice } from "../utils";
import { CardBody } from "./CardBody";
export const ProductList = () => {
  const { strapiData, FakestoreData } = useLoaderData();
  const strapiProducts = strapiData?.products;
  const fakestoreProducts = FakestoreData?.fakeproducts?.data;

  return (
    <div className="mb-12 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {strapiProducts.map((product) => {
        const { image, title, price } = product.attributes;
        const dollarsAmount = formatPrice(price);
        const api = "strapi";
        return (
          <Link
            to={`/product/${api}/${product.id}`}
            key={product.id}
            className="p-2 rounded-lg shadow-lg"
            // className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
          >
            <div className="flex gap-4 sm:gap-2 sm:flex-col  ">
              <div>
                <img
                  src={image}
                  alt={title}
                  className="h-24 w-24 rounded-lg sm:h-32 sm:w-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              {/* card body */}
              <CardBody title={title} dollarsAmount={dollarsAmount}></CardBody>
            </div>
          </Link>
        );
      })}

      {fakestoreProducts.map((product) => {
        const { image, title, price } = product;

        const dollarsAmount = formatFakeStorePrice(price);
        const api = "fakestore";
        return (
          <Link
            to={`/product/${api}/${product.id}`}
            key={product.id}
            className="p-2 rounded-lg shadow-lg"
          >
            <div className="flex gap-4 sm:gap-2 sm:flex-col ">
              <div>
                <img
                  src={image}
                  alt=""
                  className="h-24 w-24 rounded-lg sm:h-32 sm:w-full object-cover sm:object-contain group-hover:scale-105 transition duration-300"
                />
              </div>
              {/* card body */}
              <CardBody dollarsAmount={dollarsAmount} title={title}></CardBody>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

//  <div className="p-2 ">
//    <p className="font-medium ml-0 sm:ml-auto text-lg">{dollarsAmount}</p>
//    <h3 className="capitalize font-normal text-md">{title}</h3>

//    <ButtonGroup></ButtonGroup>
//  </div>;
