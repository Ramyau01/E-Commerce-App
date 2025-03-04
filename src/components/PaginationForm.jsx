import { useState } from "react";
import { filterOptions, links } from "../assets/data";
import { useLoaderData } from "react-router-dom";
import { nanoid } from "nanoid";
import React from "react";
import { Form } from "react-router-dom";
import { Pagination } from "./Pagination";
import { Link } from "react-router-dom";
import { SubmitButton } from "./SubmitButton";
export const PaginationForm = () => {
  const { strapiData, FakestoreData, FakeStoreCategories } = useLoaderData();
  const StrapiCategories = strapiData.meta.categories;
  const StrapiBrands = strapiData.meta.companies;
  const { category } = FakeStoreCategories;
  //fakestore brands
  const company = FakestoreData?.fakeproducts?.company;
  const AllBrands = [...StrapiBrands, company];
  //concatenated categories from strapi and fakestore
  const Categories = StrapiCategories.concat(category);

  //INPUT- CategoryList BrandsList
  // input: created an array of objects including id and default checked state
  const CategoryList = Categories.map((item) => {
    return { id: nanoid(), name: item, checked: false };
  });
  const BrandsList = AllBrands.map((item) => {
    return { id: nanoid(), name: item, checked: false };
  });
  console.log(CategoryList);
  //   console.log(BrandsList);
  const [categories, setCategories] = useState(CategoryList);
  const [brands, setBrands] = useState(BrandsList);
  function handleChange(id, name) {
    if (name === "category") {
      console.log("here");
      const updatedCategories = categories.map((item) => {
        if (item.id === id) {
          return { ...item, checked: true };
        } else {
          return { ...item, checked: false };
        }
      });
      console.log(updatedCategories);
      setCategories(updatedCategories);
    }
    if (name === "brand") {
      const updatedBrands = brands.map((item) => {
        if (item.id === id) {
          return { ...item, checked: true };
        } else {
          return { ...item, checked: false };
        }
      });
      console.log(updatedBrands);
      setBrands(updatedBrands);
    }
  }
  return (
    <Form>
      <div>
        {categories.map((item) => {
          return (
            <div key={item.id}>
              <input
                type="checkbox"
                name="category"
                checked={item.checked}
                value={item.name}
                onChange={() => handleChange(item.id, "category")}
              ></input>
              <label htmlFor={item.name}>{item.name}</label>
            </div>
          );
        })}
      </div>
      <h2 className="text-3xl">Brands</h2>
      <div>
        {brands.map((item) => {
          return (
            <div key={item.id}>
              <input
                type="checkbox"
                name="brand"
                value={item.name}
                checked={item.checked}
                onChange={() => handleChange(item.id, "brand")}
              ></input>
              <label htmlFor={item.name}>{item.name}</label>
            </div>
          );
        })}
      </div>

      <div className="btm-nav flex justify-between border-none">
        <div>
          <Link to="/products">
            <SubmitButton text="Cancel" style="btn-sm px-8 "></SubmitButton>
          </Link>
        </div>
        <div>
          <SubmitButton text="Apply" style="btn-sm px-8 "></SubmitButton>
        </div>
      </div>
    </Form>
  );
};
