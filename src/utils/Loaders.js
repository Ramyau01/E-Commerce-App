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

const AllStrapiProductsLoader = async () => {
  const response = await strapiFetch("/products");
  const meta = response.data.meta;
  return { products: response.data.data, meta };
};

const AllFakestoreProductsLoader = async () => {
  const response = await fakestoreFetch("/products");
  console.log(response.data);
  const fakestoreData = { data: [...response.data], company: "Myntra" };
  return { fakeproducts: fakestoreData };
};

const StrapiCategoriesItemLoader = async ({ params }) => {
  const response = await strapiFetch("/products", { params });
  console.log(response.data.data);
  const meta = response.data.meta;
  return { products: response.data.data, meta };
};

const FakestoreCategoriesItemLoader = async ({ params }) => {
  // const response = await fakestoreFetch("/products");
  // console.log(response.data);
  // const fakestoreData = { data: [...response.data], company: "Myntra" };
  // return { fakeproducts: fakestoreData };

  try {
    const response = await fakestoreFetch(
      `/products/category/${params.category}`
    );
    console.log(response.data.data);
    const fakestoreData = { data: [...response.data], company: "Myntra" };
    // const products = response.data.data || [];

    return { fakeproducts: fakestoreData };
  } catch (error) {
    console.error("Error fetching category items:", error);
    return {}; // Return empty object in case of an error
  }
};

export const CombinedLoader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  if (Object.keys(params).length === 0) {
    const strapiData = await AllStrapiProductsLoader();
    const FakestoreData = await AllFakestoreProductsLoader();
    const FakeStoreCategories = await FakeStoreCategoryLoader();

    return { strapiData, FakestoreData, FakeStoreCategories };
  } else {
    const strapiData = await StrapiCategoriesItemLoader({ params });

    const FakestoreData = await FakestoreCategoriesItemLoader({ params });
    const FakeStoreCategories = await FakeStoreCategoryLoader();
    console.log(strapiData);
    console.log(FakestoreData);
    console.log(FakeStoreCategories);
    return { strapiData, FakestoreData, FakeStoreCategories };
  }
};

// https://fakestoreapi.com/products/category/jewelery

// const AllStrapiProductsLoader = async ({ request }) => {
//   const params = Object.fromEntries([
//     ...new URL(request.url).searchParams.entries(),
//   ]);
// const response = await strapiFetch("/products", { params });
//  const meta = response.data.meta;
// return { products: response.data.data, meta };
// };

// const AllFakestoreProductsLoader = async ({ request }) => {
//   const params = Object.fromEntries([
//     ...new URL(request.url).searchParams.entries(),
//   ]);
// const response = await fakestoreFetch("/products", { params });
//   console.log(response.data);
//   const fakestoreData = { data: [...response.data], company: "Myntra" };
// return { fakeproducts: fakestoreData };
// };
