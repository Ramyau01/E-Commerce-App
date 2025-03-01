import { SubmitButton } from "./SubmitButton";
import { FaHeart } from "react-icons/fa6";
export const CardBody = ({ dollarsAmount, title }) => {
  return (
    <div>
      <div className="p-2 ">
        <div>
          <div className="flex justify-between">
            <h3 className="capitalize font-semibold text-lg">
              {dollarsAmount}
            </h3>
            <button className="btn btn-outline btn-circle btn-primary ">
              <span>
                <FaHeart size={16}></FaHeart>
              </span>
            </button>
          </div>

          <p className="font-medium ml-0 sm:ml-auto text-lg capitalize">
            {title.length < 20 ? title : `${title.substring(0, 20)}...`}
          </p>
        </div>
        <div className="py-2">
          <SubmitButton text="Add to Cart" style=" px-8 btn-sm"></SubmitButton>
        </div>
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
