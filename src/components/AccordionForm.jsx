import { FormRange } from "./FormRange";
export const AccordionForm = ({ label }) => {
  return (
    <details className="collapse collapse-arrow  w-full bg-base-200">
      <summary className="collapse-title text-xl font-medium">{label}</summary>
      <div className="collapse-content pt-4">
        <FormRange label={label}></FormRange>
      </div>
    </details>
  );
};
