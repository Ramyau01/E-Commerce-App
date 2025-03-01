import { Link } from "react-router-dom";
// import { FaChevronRight } from "react-icons/fa";
import { CategoryImages } from "../assets/data";
export const CardCarousel = () => {
  return (
    <div className="carousel carousel-center bg-none  max-w-full space-x-8 h-[15rem] relative">
      {CategoryImages.map((item) => {
        return (
          <Link to={item.url} className="carousel-item flex-col" key={item.id}>
            <div className="h-3/4 w-44">
              <img src={item.source} className="rounded-md h-full w-full" />
            </div>
            <div className="text-center mt-2">
              <h2 className="text-lg leading-8 ">{item.category}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
