import { useState } from "react";
import { Link } from "react-router-dom";

export const FormInput = ({ inputType, label, name, defaultValue }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <label className="form-control ">
      <div className="label">
        <span className="label-text text-base font-semibold">{label}</span>
      </div>
      <div>
        {inputType === "password" ? (
          <label className="input input-bordered flex items-center gap-2 h-10 text-md">
            <input
              type={showPassword ? "text" : "password"}
              name={name}
              defaultValue={defaultValue}
              className="grow"
            />
            <button
              type="button"
              className="btn btn-link "
              onClick={() => setShowPassword(!showPassword)}
            >
              Show
            </button>
          </label>
        ) : (
          <input
            type={inputType}
            name={name}
            defaultValue={defaultValue}
            className="input input-bordered input-primary w-full max-w-xs h-10"
          />
        )}
      </div>
    </label>
  );
};

//  <label className="input input-bordered flex items-center gap-8 h-10 text-md">
//    <input
//      type={inputType}
//      name={name}
//      defaultValue={defaultValue}
//      className="input input-bordered h-10 bg-slate-400"
//    />
//  </label>;
