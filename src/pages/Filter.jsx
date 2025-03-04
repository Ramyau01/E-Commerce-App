import funnel from "../assets/funnel.svg";
import arrow from "../assets/arrow-down-up.svg";
import { useLoaderData } from "react-router-dom";
import { Drawer } from "../components";

import { useState } from "react";

export const Filter = () => {
  const [selectedDrawer, setSelectedDrawer] = useState(null);
  const { strapiData, FakestoreData } = useLoaderData();
  const StrapiTotalProducts = strapiData.meta.pagination.total;
  const fakestoreProducts = FakestoreData?.fakeproducts?.data || [];
  const FakeStoreTotalProducts = fakestoreProducts.length;
  const totalProducts = StrapiTotalProducts + FakeStoreTotalProducts;

  const handleChange = (text) => {
    setSelectedDrawer((prev) => (prev === text ? null : text));
  };

  return (
    <div>
      <div className=" gap-4 mt-4 max-w-96 hidden md:flex">
        <Drawer
          icon={funnel}
          text="Filter"
          drawerid="sidebar-filter"
          selectedDrawer={selectedDrawer}
          handleChange={handleChange}
          isChecked={selectedDrawer === "Filter"}
          style="drawer-button btn btn-primary px-4 btn-sm rounded-full flex gap-4 "
        ></Drawer>
        <Drawer
          icon={arrow}
          text="Sort"
          drawerid="sidebar-sort"
          selectedDrawer={selectedDrawer}
          handleChange={handleChange}
          isChecked={selectedDrawer === "Sort"}
          style="drawer-button btn btn-primary px-4 btn-sm rounded-full flex gap-4 "
        ></Drawer>
      </div>
      <div className="mt-4 font-bold text-lg">
        <div className="flex justify-between">
          <div>
            {totalProducts === 0 ? (
              <h5 className="text-2xl mt-16">
                Sorry, no products matched your search...
              </h5>
            ) : (
              <h4>
                {totalProducts} result{totalProducts > 1 && "s"}
              </h4>
            )}
          </div>
          <div className="flex gap-2 md:hidden">
            <Drawer
              icon={funnel}
              text="Filter"
              drawerid="sidebar-filter"
              selectedDrawer={selectedDrawer}
              handleChange={handleChange}
              isChecked={selectedDrawer === "Filter"}
              style="btn btn-circle btn-outline btn-sm btn-primary"
            ></Drawer>
            <Drawer
              icon={arrow}
              text="Sort"
              drawerid="sidebar-sort"
              selectedDrawer={selectedDrawer}
              handleChange={handleChange}
              isChecked={selectedDrawer === "Sort"}
              style="btn btn-circle btn-sm btn-primary"
            ></Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

//  const handleChange = (text) => {
//    // setSelectedDrawer((prev) => (prev === text ? null : text));

//  };
