export const Checkbox = ({ text, selectedCheckbox, handleChange }) => {
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => handleChange(text)}
        checked={selectedCheckbox === text}
      />
      <label htmlFor="">{text}</label>
    </div>
  );
};
