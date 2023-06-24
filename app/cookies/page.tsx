"use client";

import { useState } from "react";
import { CookiesMenu } from "../menu";
import { filterCookiesByGlutenFree, filterCookiesByPrice } from "../filters";
import { FilterPill } from "../components/FilterPill";
import { ResetPill } from "../components/ResetPill";
import { LabelTopRight } from "../components/LabelTopRightPill";

export default function Cookies() {
  const [showGlutenFree, setShowGlutenFree] = useState(false);
  const [sortDescending, setSortDescending] = useState(false);

  const resetFilters = () => {
    setShowGlutenFree(false);
    setSortDescending(false);
  };

  let cookiesToDisplay = showGlutenFree
    ? filterCookiesByGlutenFree(CookiesMenu, true)
    : CookiesMenu;
  cookiesToDisplay = filterCookiesByPrice(cookiesToDisplay, sortDescending);

  return (
    <div className="p-12">
      <div className="flex justify-center items-center">
        <div className="grid gap-4 grid-cols-3">
          <FilterPill
            onClick={() => setShowGlutenFree(!showGlutenFree)}
            isActive={showGlutenFree}
          >
            Gluten Free
          </FilterPill>
          <FilterPill
            onClick={() => setSortDescending(!sortDescending)}
            isActive={sortDescending}
          >
            {sortDescending ? "Sort Ascending" : "Sort Descending"}
          </FilterPill>
          <ResetPill onClick={resetFilters}>Reset</ResetPill>
        </div>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4">
        {cookiesToDisplay.map((item, index) => {
          return (
            <div key={index} className="p-4 bg-white rounded-lg relative">
              {item["gluten-free"] && (
                <LabelTopRight>Gluten free</LabelTopRight>
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
