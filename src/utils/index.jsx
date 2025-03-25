import axios from "axios";
const baseUrl = "https://strapi-store-server.onrender.com/api";

export const strapiFetch = axios.create({
  baseURL: baseUrl,
});

const fakeStoreUrl = "https://fakestoreapi.com";
export const fakestoreFetch = axios.create({
  baseURL: fakeStoreUrl,
});

export const formatPrice = (price) => {
  const dollarAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));

  return dollarAmount;
};

export const formatFakeStorePrice = (price) => {
  console.log("Myntra");

  const dollarAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price.toFixed(2));
  console.log(dollarAmount);

  return dollarAmount;
};
export const formatFSCartPrice = (price) => {
  console.log("Myntra");

  const dollarAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  console.log(dollarAmount);

  return dollarAmount;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
