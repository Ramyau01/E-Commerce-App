import { useNavigation } from "react-router-dom";

export const SubmitButton = ({ text, style }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <button
      type="submit"
      className={`btn px-4 rounded-full btn-primary btn-sm ${style}`}
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <span className="loading loading-dots loading-md"></span>
      ) : (
        text || "Submit"
      )}
    </button>
  );
};

//  className = "btn btn-accent btn-sm px-4 rounded-md text-sm ";
