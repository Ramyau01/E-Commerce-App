import { strapiFetch } from ".";
import { fakestoreFetch } from ".";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import { clearFKOrders } from "../features/cart/cartSlice";

const FakeStoreCategoryLoader = async () => {
  const response = await fakestoreFetch("/products/categories");

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

  const fakestoreData = { data: [...response.data], company: "Myntra" };
  return { fakeproducts: fakestoreData };
};

const StrapiCategoriesItemLoader = async ({ params }) => {
  const response = await strapiFetch("/products", { params });

  const meta = response.data.meta;
  return { products: response.data.data, meta };
};

const FakestoreCategoriesItemLoader = async ({ params }) => {
  try {
    const response = await fakestoreFetch(
      `/products/category/${params.category}`
    );

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

    return { strapiData, FakestoreData, FakeStoreCategories };
  }
};

export const CheckoutLoader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn("Please login to checkout");
    return redirect("/login");
  }
  return null;
};
export const OrdersLoader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warn("Please login to view Orders");
      return redirect("/login");
    }

    // const myntraItems = store.getState().cartState.myntraProducts;

    // store.dispatch(clearFKOrders());

    try {
      const response = await strapiFetch.get("/orders", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(response.data.data);
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error accessing your orders";

      toast.error(errorMessage);
      if (error?.response?.status === 401 || error?.response?.status === 403)
        return redirect("/login");

      return null;
    }
  };
