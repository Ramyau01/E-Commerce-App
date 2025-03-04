import { useState } from "react";
import { filterOptions } from "../assets/data";
import { useLoaderData } from "react-router-dom";
import { nanoid } from "nanoid";
import React from "react";
import { CategoryAccordion } from "./CategoryAccordion";
import { AccordionForm } from "./AccordionForm";
// import { useLoaderData } from "react-router-dom";
export const FilterItems = () => {
  // fetched categories from the strapi and fakestore
  const { strapiData, FakestoreData, FakeStoreCategories } = useLoaderData();
  const StrapiCategories = strapiData.meta.categories;
  const StrapiBrands = strapiData.meta.companies;
  const { category } = FakeStoreCategories;
  const company = FakestoreData?.fakeproducts?.company;
  const AllBrands = [...StrapiBrands, company];

  //concatenated both the arrays
  const CategoryList = StrapiCategories.concat(category);
  // input: created an array of objects including id and default checked state
  const Categories = CategoryList.map((item) => {
    return { id: nanoid(), name: item, checked: false };
  });
  const BrandsList = AllBrands.map((item) => {
    return { id: nanoid(), name: item, checked: false };
  });

  const [checkedCategories, setCheckedCategories] = useState(Categories);
  const [checkedBrands, setCheckedBrands] = useState(BrandsList);

  function handleCheckboxChange(clickedId, label) {
    if (label === "Category") {
      const updatedCategories = checkedCategories.map((category) => {
        if (category.id === clickedId) {
          return { ...category, checked: true };
        } else {
          return { ...category, checked: false };
        }
      });
      console.log(updatedCategories);
      setCheckedCategories(updatedCategories);
    }
    if (label === "Brand") {
      const updatedBrands = checkedBrands.map((category) => {
        if (category.id === clickedId) {
          return { ...category, checked: true };
        } else {
          return { ...category, checked: false };
        }
      });
      console.log(updatedBrands);
      setCheckedBrands(updatedBrands);
    }
  }
  return (
    <li>
      {/* Accordion */}
      <div className="flex flex-col">
        {filterOptions.map((option) => {
          const { id, label } = option;
          return (
            <React.Fragment key={id}>
              {label === "Category" && (
                <CategoryAccordion
                  key={id}
                  label={label}
                  categorynames={checkedCategories}
                  handleCheckboxChange={handleCheckboxChange}
                  onAccordionClick={() =>
                    setCheckedCategories(checkedCategories)
                  }
                ></CategoryAccordion>
              )}
              {label === "Brand" && (
                <CategoryAccordion
                  key={id}
                  label={label}
                  categorynames={checkedBrands}
                  handleCheckboxChange={handleCheckboxChange}
                  onAccordionClick={() => setCheckedBrands(checkedBrands)}
                ></CategoryAccordion>
              )}
              {label === "Price" && (
                <AccordionForm label={label}></AccordionForm>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </li>
  );
};
