import { strapiFetch } from ".";
import { fakestoreFetch } from ".";

const FakeStoreCategoryLoader = async () => {
  const response = await fakestoreFetch("/products/categories");
  console.log(response.data);
  return { category: response.data };
};

export const SingleProductLoader = async ({ params }) => {
  let productData = null;
  if (params.api === "strapi") {
    const response = await strapiFetch(`/products/${params.id}`);
    const attributes = response.data.data.attributes;
    productData = {
      id: response.data.data.id,
      title: attributes.title,
      price: attributes.price,
      description: attributes.description,
      category: "Furnitures",
      company: attributes.company,
      colors: attributes.colors || [],
      image: attributes.image || "",
    };
  } else {
    const response = await fakestoreFetch(`/products/${params.id}`);
    productData = {
      id: response.data.id,
      title: response.data.title,
      price: response.data.price,
      description: response.data.description,
      category: response.data.category,
      company: response.data.company || "Myntra",
      colors: [],
      image: response.data.image,
    };
  }
  return { product: productData };
};

const AllStrapiProductsLoader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await strapiFetch("/products", { params });
  // const response = await strapiFetch("/products");

  const meta = response.data.meta;

  return { products: response.data.data, meta };
};

const AllFakestoreProductsLoader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await fakestoreFetch("/products", { params });
  console.log(response.data);
  const fakestoreData = { data: [...response.data], company: "Myntra" };
  // return { fakeproducts: response.data };
  return { fakeproducts: fakestoreData };
};

export const CombinedLoader = async ({ request }) => {
  const strapiData = await AllStrapiProductsLoader({ request });
  const FakestoreData = await AllFakestoreProductsLoader({ request });
  const FakeStoreCategories = await FakeStoreCategoryLoader();
  return { strapiData, FakestoreData, FakeStoreCategories };
};

// https://fakestoreapi.com/products/category/jewelery
