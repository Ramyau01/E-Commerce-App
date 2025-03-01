import { useRouteError } from "react-router-dom";

export const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <h4 className="font-bold text-4xl">There was an error.. {error.message}</h4>
  );
};
