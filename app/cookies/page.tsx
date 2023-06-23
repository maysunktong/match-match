"use client";

import { useState } from "react";
import { CookiesMenu } from "../menu";
import { filterCookiesByGlutenFree, filterCookiesByPrice } from "../filters";
import { FilterPill } from "../components/FilterPill";
import { ResetPill } from "../components/ResetPill";

export default function Cookies() {
  const [showGlutenFree, setShowGlutenFree] = useState(false);
  const [sortDecending, setSortDecending] = useState(false);

  const resetFilters = () => {
    setShowGlutenFree(false);
    setSortDecending(false);
  };

  let cookiesToDisplay = showGlutenFree
    ? filterCookiesByGlutenFree(CookiesMenu, true)
    : CookiesMenu;
  cookiesToDisplay = filterCookiesByPrice(cookiesToDisplay, sortDecending);

  return (
    <div className="p-12">
      <div className="flex justify-center items-center">
        <div className="grid gap-6 grid-cols-3">
        <FilterPill 
            onClick={() => setShowGlutenFree(!showGlutenFree)}
            isActive={showGlutenFree}
          >
            {showGlutenFree ? "Show All" : "Gluten Free"}
          </FilterPill>
          <FilterPill 
            onClick={() => setSortDecending(!sortDecending)}
            isActive={sortDecending}
          >
            {sortDecending ? "Sort Ascending" : "Sort Descending"}
          </FilterPill>
          <ResetPill onClick={resetFilters}>Reset</ResetPill>
        </div>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4">
        {cookiesToDisplay.map((item, index) => {
          return (
            <div key={index} className="p-4 bg-white rounded-lg relative">
              {item["gluten-free"] && (
                <p className="absolute top-8 right-2 text-xs text-gray-400 border px-2 py-1  rounded-xl">
                  Gluten Free
                </p>
              )}
              <div className="flex justify-center items-center p-8">
                <img className="w-48" src={item.image} alt={item.name} />
              </div>
              <h1 className="text-lg font-semibold">{item.name}</h1>
              <p className="text-gray-600">${item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
