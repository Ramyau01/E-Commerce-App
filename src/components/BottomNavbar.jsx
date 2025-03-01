import { Icons } from "./Icons";

export const BottomNavbar = () => {
  return (
    <div className="btm-nav btm-nav-sm bg-pink-200 ">
      <Icons btnClass="text-primary"></Icons>
    </div>
  );
};

// export const Icons = ({ btnClass = "" }) => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   function handleClick(index) {
//     console.log(activeIndex);
//     setActiveIndex(index);
//   }
//   console.log(activeIndex);
//   return (
//     <>
//       <button
//         className={activeIndex === 1 ? `${btnClass} active` : btnClass}
//         onClick={() => handleClick(1)}
//       >
//         <FaRegUserCircle></FaRegUserCircle>
//       </button>
//       <button
//         className={activeIndex === 2 ? `${btnClass} active` : btnClass}
//         onClick={() => handleClick(2)}
//       >
//         <FaHeart></FaHeart>
//       </button>
//       <button
//         className={activeIndex === 3 ? `${btnClass} active` : btnClass}
//         onClick={() => handleClick(3)}
//       >
//         <div className="indicator">
//           <FaCartShopping></FaCartShopping>
//           <span className="badge badge-xs badge-primary indicator-item"></span>
//         </div>
//       </button>
//     </>
//   );
// };
// Icons.propTypes = {
//   btnClass: PropTypes.string, // Ensures btnClass is a string
// };
