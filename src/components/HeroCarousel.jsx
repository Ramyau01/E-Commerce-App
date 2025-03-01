import { useState } from "react";
import { carouselImages } from "../assets/data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(currentIndex);
  const carouselImage = carouselImages[currentIndex];
  const { id, source } = carouselImage;
  // const currentIndex = useRef(0);
  const totalImages = carouselImages.length;
  function checkIndex(index) {
    if (index > totalImages - 1) {
      return 0;
    }
    if (index < 0) {
      return totalImages - 1;
    }
    return index;
  }
  function handlePrev() {
    setCurrentIndex((currentIndex) => {
      const previous = currentIndex - 1;
      return checkIndex(previous);
    });
  }
  function handleNext() {
    setCurrentIndex((currentIndex) => {
      const next = currentIndex + 1;
      return checkIndex(next);
    });
  }
  return (
    <div className="carousel w-full max-w-4xl h-[28rem] md:h-[28rem] carousel-center  relative">
      {/* {carouselImages.map((item) => {
        return ( */}
      <div className="carousel-item w-full" key={id}>
        <img
          src={source}
          alt="banner image for cmart"
          className="w-full h-full  object-contain"
        />
        <div className="absolute left-5 right-5 top-1/2 flex justify-between -translate-y-1/2 transform">
          <button className="btn btn-circle" onClick={handlePrev}>
            <FaChevronLeft className="text-lg"></FaChevronLeft>
          </button>
          <button className="btn btn-circle" onClick={handleNext}>
            <FaChevronRight className="text-lg"></FaChevronRight>
          </button>
        </div>
      </div>
      {/* );
      })} */}
    </div>
  );
};
