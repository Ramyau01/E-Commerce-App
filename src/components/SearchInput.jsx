import { useState } from "react";
import searchIcon from "../assets/search-icon.svg";
import { Form, useNavigate } from "react-router-dom";
export const Input = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function handleSearchSubmit(e) {
    e.preventDefault();
    navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
  }

  return (
    <Form className="pb-4 md:pb-0" onSubmit={handleSearchSubmit}>
      <label className="input input-bordered  flex items-center   h-10">
        <input
          type="search"
          name="search"
          value={searchTerm}
          className="grow w-full outline-none"
          placeholder="what can we help you find .."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-ghost btn-circle" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-6 w-6 opacity-70 flex-shrink-0"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </label>
    </Form>
  );
};
