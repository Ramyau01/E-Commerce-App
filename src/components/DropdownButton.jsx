import { useState } from "react";

export const DropdownButton = ({ text }) => {
  const [qty, setQty] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handleSelect(num) {
    setQty(num);
    setIsOpen(false);
  }
  return (
    <div className="dropdown dropdown-top">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        {text} {qty}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-down-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </div>
      {isOpen && (
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-xl max-h-40 overflow-y-auto"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
            return (
              <li key={num}>
                <a onClick={() => handleSelect(num)}>{num}</a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
