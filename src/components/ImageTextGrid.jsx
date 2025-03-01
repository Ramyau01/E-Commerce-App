import hero from "../assets/hero5.jpg";
export const ImageTextGrid = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className=" h-[28rem] p-4 max-w-sm">
          <img
            src={hero}
            alt=""
            className="h-full w-full rounded-2xl shadow-lg object-fit"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Text GRid</h2>
          <p className="mt-4 text-gray-600">
            This is a responsive grid layout using Tailwind CSS. It adjusts
            based on screen size and ensures a clean, modern design.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
