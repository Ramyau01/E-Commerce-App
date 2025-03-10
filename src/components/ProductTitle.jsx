export const ProductTitle = ({ company, title }) => {
  return (
    <div className="border-b border-base-300">
      <h2 className="font-bold text-3xl  capitalize leading-4 text-primary ">
        {company}
      </h2>
      <p className="capitalize text-xl font-normal text-primary py-3 ">
        {title}
      </p>
    </div>
  );
};
