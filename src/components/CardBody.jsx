import { FaHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addItemToWishlist } from "../features/wishlist/wishlistSlice";
export const CardBody = ({
  id,
  dollarsAmount,
  title,
  company,
  price,
  image,
  colors,
}) => {
  const dispatch = useDispatch();

  const wishedProduct = {
    id,
    image,
    title,
    price,
    qty: 0,
    productColor: "#ffffff",
    company,
  };

  const AddToWishList = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addItemToWishlist({ product: wishedProduct }));
  };
  return (
    <div className="w-full">
      <div className="p-2 ">
        <div>
          <div className="flex justify-between">
            <h3 className="capitalize font-semibold text-lg">
              {dollarsAmount}
            </h3>
            <button
              className="btn  btn-ghost btn-primary btn-sm "
              onClick={(e) => AddToWishList(e)}
            >
              <span className="text-primary">
                <FaHeart size={20}></FaHeart>
              </span>
            </button>
          </div>
          <p className="font-medium ml-0 sm:ml-auto text-lg capitalize text-primary">
            {company}
          </p>

          <p className="font-medium ml-0 sm:ml-auto text-lg capitalize">
            {title.length < 20 ? title : `${title.substring(0, 20)}...`}
          </p>
        </div>
        {/* <div className="py-2">
          <SubmitButton text="Add to Cart" style=" px-8 btn-sm"></SubmitButton>
        </div> */}
      </div>
    </div>
  );
};

// <div className=" mt-2 h-10  flex justify-start gap-4 items-stretch">
//   <SubmitButton
//     text="Add to Cart"
//     style=" px-8 h-full min-h-8 "
//   ></SubmitButton>

//   <button className="btn btn-outline h-full min-h-8 btn-circle btn-primary top-2 right-2 ">
//     <span>
//       <FaHeart size={18}></FaHeart>
//     </span>
//   </button>
// </div>
