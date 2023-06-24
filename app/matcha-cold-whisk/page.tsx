"use client";

import { useState } from 'react';
import { ColdWhiskMenu, CookiesMenu } from '../menu';
import {
  filterColdWhiskByAlmondMilk,
  filterColdWhiskByMilk,
  filterColdWhiskByPrice,
  filterColdWhiskBySoyMilk,
  filterCookiesByGlutenFree,
  filterCookiesByPrice,
} from '../filters';
import { FilterPill } from '../components/FilterPill';
import { ResetPill } from '../components/ResetPill';

export default function MatchaColdWhisk() {
  const [showMilk, setShowMilk] = useState(false);
  const [showSoyMilk, setShowSoyMilk] = useState(false);
  const [showAlmondMilk, setShowAlmondMilk] = useState(false);
  const [sortDescending, setSortDescending] = useState(false);

  const resetFilters = () => {
    setShowMilk(false);
    setShowSoyMilk(false);
    setShowAlmondMilk(false);
    setSortDescending(false);
  };

  let coldWhiskToDisplay = ColdWhiskMenu;
  if (showMilk) {
    coldWhiskToDisplay = filterColdWhiskByMilk(coldWhiskToDisplay, true);
  }
  if (showSoyMilk) {
    coldWhiskToDisplay = filterColdWhiskBySoyMilk(coldWhiskToDisplay, true);
  }
  if (showAlmondMilk) {
    coldWhiskToDisplay = filterColdWhiskByAlmondMilk(coldWhiskToDisplay, true);
  }
  coldWhiskToDisplay = filterColdWhiskByPrice(coldWhiskToDisplay, sortDescending);


  return (
    <div className="p-12">
      <div className="flex justify-center items-center">
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-5">
          <FilterPill
            onClick={() => setShowMilk(!showMilk)}
            isActive={showMilk}
          >
         Lactose Free Milk
          </FilterPill>
          <FilterPill
            onClick={() => setShowSoyMilk(!showSoyMilk)}
            isActive={showSoyMilk}
          >
            Soy Milk
          </FilterPill>
          <FilterPill
            onClick={() => setShowAlmondMilk(!showAlmondMilk)}
            isActive={showAlmondMilk}
          >
            Almond Milk
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
        {coldWhiskToDisplay.map((item, index) => {
          return (
            <div key={index} className="p-4 bg-white rounded-lg relative">
              {item["gluten-free"] && (
                <p className="absolute top-8 right-2 text-xs border text-gray-400 px-2 py-1 rounded-xl">
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
