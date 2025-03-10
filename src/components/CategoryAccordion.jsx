// import { useDrawerContext } from "../pages/AppContext";

export const CategoryAccordion = ({
  label,
  categorynames,
  handleCheckboxChange,
  onAccordionClick,
}) => {
  function handleChange(id) {
    handleCheckboxChange(id, label);
  }
  return (
    <details
      className="collapse collapse-arrow bg-base-200 w-full "
      onClick={() => onAccordionClick(label)}
    >
      {/* <input type="radio" name="my-accordion-2" /> */}
      <summary className="collapse-title text-xl font-medium ">{label}</summary>
      <div className="collapse-content">
        {categorynames.map((category) => {
          const { id, name } = category;
          return (
            <div className="form-control w-full" key={id}>
              <label className="cursor-pointer label justify-start gap-4 border-2 border-b-gray-300">
                <div>
                  <input
                    type="checkbox"
                    checked={category.checked}
                    name={label === "Brand" ? "company" : "category"}
                    value={name}
                    className="checkbox checkbox-success"
                    onChange={() => handleChange(id)}
                    // onChange={() => handleCheckboxChange(id)}
                  />
                </div>
                <div>
                  <span className="label-text text-base capitalize ">
                    {name}
                  </span>
                </div>
              </label>
            </div>
          );
        })}
      </div>
    </details>
  );
};
