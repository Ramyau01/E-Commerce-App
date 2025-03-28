import { formatPrice, formatFSCartPrice } from "../utils";

export const OrderItem = ({ order }) => {
  const { productID, company, image, price, title } = order;

  return (
    <article
      key={productID}
      className="mb-4  flex p-4 gap-4 md:gap-12 relative shadow-lg rounded-md"
    >
      <div>
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="h-32 w-32 rounded-lg sm:h-32 sm:w-32 object-cover"
        />
      </div>
      <div>
        {/* PRICE */}
        <p className="font-bold sm:ml-auto text-xl leading-8">
          {company === "Myntra" ? formatFSCartPrice(price) : formatPrice(price)}
        </p>
        {/* TITLE */}
        <h3 className="capitalize font-medium text-lg text-primary">{title}</h3>
        {/* COMPANY */}
        <h4 className=" capitalize text-md">{company}</h4>
      </div>
    </article>
  );
};
