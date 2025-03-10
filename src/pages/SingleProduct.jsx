import { useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";
import { Link } from "react-router-dom";

import { ProductTitle, DropdownButton } from "../components";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { addItemToWishlist } from "../features/wishlist/wishlistSlice";

export const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } = product;

  const [productColor, setProductColor] = useState("");
  const [readMore, setReadMore] = useState(false);
  const [qty, setQty] = useState(1);

  function handleButtonClick(e, color) {
    e.preventDefault();

    setProductColor(color);
  }

  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    qty,
    productColor,
    company,
  };
  const wishedProduct = {
    id: product.id,
    image,
    title,
    price,
    qty,
    productColor,
    company,
  };
  const dispatch = useDispatch();
  const dollarAmount = formatPrice(price);
  const addtoCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };
  const addtoWishlist = () => {
    dispatch(addItemToWishlist({ product: wishedProduct }));
  };

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
          <div className="image-container flex flex-col max-h-96">
            <div className="md:hidden">
              <ProductTitle title={title} company={company}></ProductTitle>
            </div>
            <div className="h-80 sm:h-full">
              <img
                src={image}
                className="h-full w-full sm:h-full sm:w-full  max-w-md  object-cover rounded border-4"
                style={{ borderColor: productColor || "transparent" }}
              ></img>
            </div>
          </div>
          <div className="text-container">
            <div className="hidden md:block">
              <div className="">
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
                    className="btn btn-link text-primary"
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
              <DropdownButton
                text="Quantity"
                setQty={setQty}
                qty={qty}
              ></DropdownButton>
            </div>
            <div className="mt-10 flex w-100 gap-2">
              <div className="w-full">
                <button
                  className="btn btn-primary px-4 btn-wide w-full rounded-none"
                  onClick={addtoCart}
                >
                  Add to cart
                </button>
              </div>
              <div className="w-full">
                <button
                  className="btn btn-primary px-4 btn-wide w-full rounded-none"
                  onClick={addtoWishlist}
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
