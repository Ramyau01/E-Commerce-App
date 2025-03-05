import { formatPrice } from "../utils/index";
import { useState } from "react";
export const FormRange = ({ label }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(maxPrice);
  return (
    <div className="form-control">
      <label htmlFor={label} className="label cursor-pointer">
        <span className="label-text capitalize">Selected {label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name="price"
        min={0}
        max={maxPrice}
        value={selectedPrice}
        className="range range-xs  range-primary"
        step={step}
        onChange={(e) => setSelectedPrice(e.target.value)}
      />

      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max : {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
};
