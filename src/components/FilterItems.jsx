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

  const [checkedCategories, setCheckedCategories] = useState([]);

  function handleAccordionOpen(label) {
    if (label === "Category") {
      setCheckedCategories(Categories);
    }
    if (label === "Brand") {
      setCheckedCategories(BrandsList);
    }
  }

  function handleCheckboxChange(clickedId) {
    console.log(clickedId);
    const updatedCategories = checkedCategories.map((category) => {
      if (category.id === clickedId) {
        return { ...category, checked: true };
      } else {
        return { ...category, checked: false };
      }
    });
    setCheckedCategories(updatedCategories);
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
                  onAccordionClick={handleAccordionOpen}
                ></CategoryAccordion>
              )}
              {label === "Brand" && (
                <CategoryAccordion
                  key={id}
                  label={label}
                  categorynames={checkedCategories}
                  handleCheckboxChange={handleCheckboxChange}
                  onAccordionClick={handleAccordionOpen}
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

// const [Options, setFilterOptions] = useState(filterOptions);
// function handleChange(id) {
//   console.log(id);
//   const ModifiedOptions = Options.map((option) => {
//     if (option.id === id && option.checked === false) {
//       return { ...option, checked: true };
//     } else {
//       return { ...option, checked: false };
//     }
//   });
//   console.log(ModifiedOptions);
//   setFilterOptions(ModifiedOptions);
// }

//  <div className="sort-container flex flex-col w-full">
//    {Options.map((option) => {
//      const { id, label } = option;
//      return (
//        <div className="form-control w-full" key={id}>
//          <label className="cursor-pointer label justify-start gap-4 border-2 border-b-gray-300">
//            <div>
//              <input
//                type="checkbox"
//                checked={option.checked}
//                className="checkbox checkbox-success"
//                onChange={() => handleChange(id)}
//              />
//            </div>
//            <div>
//              <span className="label-text text-base ">{label}</span>
//            </div>
//          </label>
//        </div>
//      );
//    })}
//  </div>;
