import { useState } from "react";
import { sortOptions } from "../assets/data";
export const SortItems = () => {
  const [Options, setSortOptions] = useState(sortOptions);

  function handleChange(e, id) {
    console.log(id);
    const ModifiedOptions = Options.map((option) => {
      if (option.id === id && option.checked === false) {
        return { ...option, checked: true };
      } else {
        return { ...option, checked: false };
      }
    });
    console.log(ModifiedOptions);
    setSortOptions(ModifiedOptions);
  }
  return (
    <li>
      <div className="sort-container flex flex-col w-full">
        {Options.map((option) => {
          const { id, label } = option;
          return (
            <div className="form-control w-full" key={id}>
              <label className="cursor-pointer label justify-start gap-4 border-2 border-b-gray-300">
                <div>
                  <input
                    type="checkbox"
                    checked={option.checked}
                    className="checkbox checkbox-success"
                    onChange={(e) => handleChange(e, id)}
                  />
                </div>
                <div>
                  <span className="label-text text-base ">{label}</span>
                </div>
              </label>
            </div>
          );
        })}
      </div>
    </li>
  );
};
