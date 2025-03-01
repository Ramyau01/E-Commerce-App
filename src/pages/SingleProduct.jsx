import { useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";
import { Link } from "react-router-dom";
import { SubmitButton } from "../components";
import { ProductTitle, DropdownButton } from "../components";
import { useState } from "react";
export const SingleProduct = () => {
  const { product } = useLoaderData();

  const { image, title, price, description, colors, category, company } =
    product;
  // const productData = useLoaderData();
  // const {
  //   product: {
  //     attributes: { image, title, price, description, colors, company },
  //   },
  // } = productData;
  const [productColor, setProductColor] = useState("");
  const [readMore, setReadMore] = useState(false);

  function handleButtonClick(e, color) {
    e.preventDefault();

    setProductColor(color);

    // e.target.classList.add("border-2", "border-primary");
  }

  const dollarAmount = formatPrice(price);
  return (
    <div className="align-element">
      <div className="breadcrumbs text-md text-gray-600">
        <ul>
          <li>
            <Link to="/" className="hover:text-gray-800">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-800">
              Products
            </Link>
          </li>
        </ul>
        <div className="container grid grid-cols-1 md:grid-cols-2 py-12 gap-4">
          <div className="image-container flex flex-col">
            <div className="mb-4 md:hidden">
              <ProductTitle title={title} company={company}></ProductTitle>
            </div>

            <img
              src={image}
              className="h-80 w-fit sm:h-full sm:w-full  max-w-md  object-cover rounded border-4"
              style={{ borderColor: productColor || "transparent" }}
            ></img>
          </div>
          <div className="text-container">
            <div className="hidden md:block">
              <div className="">
                <h1>{category}</h1>
                <ProductTitle title={title} company={company}></ProductTitle>
              </div>
            </div>
            <div>
              <p className="font-bold text-xl  capitalize leading-4 mt-3">
                {dollarAmount}
              </p>
              <p className=" text-md  capitalize leading-6 mt-6">
                {readMore ? description : description.substring(0, 100)}...
                <span>
                  <button
                    className="btn btn-link text-accent"
                    onClick={() => setReadMore(!readMore)}
                  >
                    {readMore ? "read less" : "read more"}
                  </button>
                </span>
              </p>
              {colors.length > 0 && (
                <p className="text-l  capitalize leading-6 mt-6 font-bold">
                  Choose Color
                </p>
              )}

              {colors.map((color) => {
                return (
                  <button
                    disabled={color === productColor}
                    key={color}
                    className={`badge w-7 h-7 mr-2 mt-2 ${
                      productColor === color ? "border-2 border-primary" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={(e) => handleButtonClick(e, color)}
                  ></button>
                );
              })}
            </div>
            <div className="mt-2">
              <DropdownButton text="Quantity"></DropdownButton>
            </div>
            <div className="mt-10 flex w-100 gap-2">
              <div className="w-full">
                <button
                  className="btn btn-primary px-4 btn-wide w-full rounded-none"
                  onClick={() => console.log("add to bag")}
                >
                  Add to cart
                </button>
              </div>
              <div className="w-full">
                <button
                  className="btn btn-primary px-4 btn-wide w-full rounded-none"
                  onClick={() => console.log("add to bag")}
                >
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
