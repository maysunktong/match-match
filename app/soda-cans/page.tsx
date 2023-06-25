"use client";

import { useState } from 'react';
import {
  filterFlavouredMatchaByPrice,
  filterMatchaByCeremonialGrade,
  filterSodaByPrice,
  filterSodasByFlowery,
  filterSodasByFruity,
} from '../filters';
import { FilterPill } from '../components/FilterPill';
import { ResetPill } from '../components/ResetPill';
import { SodaCanMenu } from '../menu';

export default function MatchaFruity() {
  const [showFlowery, setShowFlowery] = useState(false);
  const [showFruity, setShowFruity] = useState(false);
  const [sortDescending, setSortDescending] = useState(false);

  const resetFilters = () => {
    setShowFlowery(false);
    setShowFruity(false);
    setSortDescending(false);
  };

  let sodaToDisplay = SodaCanMenu;
  if (showFlowery) {
    sodaToDisplay = filterSodasByFlowery(sodaToDisplay, true);
  }
  if (showFruity) {
    sodaToDisplay = filterSodasByFruity(sodaToDisplay, true);
  }
  sodaToDisplay = filterSodaByPrice(sodaToDisplay, sortDescending);


  return (
    <div className="p-12">
      <div className="flex justify-center items-center">
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-4">
          <FilterPill
            onClick={() => setShowFlowery(!showFlowery)}
            isActive={showFlowery}
          >
         Flowery
          </FilterPill>
          <FilterPill
            onClick={() => setShowFruity(!showFruity)}
            isActive={showFruity}
          >
         Fruity
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
        {sodaToDisplay.map((item, index) => {
          return (
            <div key={index} className="p-4 bg-white rounded-lg relative">
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
