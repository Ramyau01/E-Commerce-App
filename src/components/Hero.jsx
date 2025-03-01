import heroImage from "../assets/heroImage.png";
// import herobanner from "../assets/herobanner.png";
import { Link } from "react-router-dom";
export const Hero = () => {
  return (
    <div className="mb-12 hero md:p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-24 items-center pl-8">
        <div>
          <h1 className="max-w-2xl text-3xl text-center md:text-4xl font-bold tracking-tight lg:text-6xl">
            We’re changing the way people shop.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo.
          </p>
          <div className="text-center mt-8">
            <Link to="products" className="btn btn-accent">
              Browse Our Products
            </Link>
          </div>
        </div>
        <div className="hidden sm:block sm:h-[24rem] md:h-[28rem] max-w-xs ">
          <img
            src={heroImage}
            alt="woman shopping online"
            className="h-full w-full  rounded-2xl lg:rounded-none object-fit  shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

//  <div className="mb-12 hero md:p-4">
//    <div className="grid sm:grid-cols-2 items-center">
//      <div>
//        <h1 className="max-w-2xl text-4xl font-bold tracking-tight lg:text-6xl">
//          We’re changing the way people shop.
//        </h1>
//        <p className="mt-8 max-w-xl text-lg leading-8">
//          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
//          cupidatat commodo.
//        </p>
//        <div className="text-center mt-8">
//          <Link to="products" className="btn btn-accent">
//            Browse Our Products
//          </Link>
//        </div>
//      </div>
//      <div className="hidden sm:block sm:h-[24rem] h-[28rem] px-10 lg:px-12 ">
//        <div className="h-full ">
//          <img
//            src={heroImage}
//            alt=""
//            className="h-full w-full max-w-96 rounded-box lg:rounded-none object-fit  shadow-2xl"
//          />
//        </div>
//      </div>
//    </div>
//  </div>;
