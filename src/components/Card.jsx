export const Card = ({ image }) => {
  return (
    <div className="card bg-base-100 w-40 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>

        <div className="card-actions">
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </div>
  );
};
