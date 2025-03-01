export const ButtonWithIcon = ({ icon, text }) => {
  return (
    <button className="btn btn-accent btn-sm">
      <img src={icon} alt={text} />
      {text}
    </button>
  );
};
