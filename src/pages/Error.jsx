import { Link } from "react-router-dom";
import img from "../assets/pagenotfound.svg";
import { useRouteError } from "react-router-dom";
import { Navbar } from "../components/Navbar";
export const Error = () => {
  const error = useRouteError();

  // const error = useRouteError();
  if (error.status === 404) {
    return (
      <div>
        <Navbar></Navbar>
        <div className="grid mt-8 md:mt-16  mx-auto max-w-4xl  p-5">
          <div className="place-items-center">
            <img
              src={img}
              alt="error: page not found"
              className="max-h-[40vh]"
            />
          </div>
          <div className="text-center mt-8">
            <h3 className="text-xl leading-8 font-extrabold">
              Sorry, Page not found
            </h3>

            <button className="cursor-pointer rounded-md bg-gray-800 px-4 mt-2 py-2 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
              <Link to="/">Back to Home Page</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="mt-10 mx-auto">
      <h4 className="text-center font-bold ">There was an error ...</h4>
      <p>{error.data}</p>
    </div>
  );
};
