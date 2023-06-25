"use client";

import { useState } from 'react';
import {
  filterColdWhiskByPrice,
  filterFlavouredMatchaByPrice,
  filterMatchaByCeremonialGrade,
  filterMatchaByCulinaryGrade
} from '../filters';
import { FilterPill } from '../components/FilterPill';
import { ResetPill } from '../components/ResetPill';
import { FlavoredMatchaMenu } from '../menu';

export default function MatchaFruity() {
  const [showCeremonial, setShowCeremonial] = useState(false);
  const [sortDescending, setSortDescending] = useState(false);

  const resetFilters = () => {
    setShowCeremonial(false);
    setSortDescending(false);
  };

  let matchaFruityToDisplay = FlavoredMatchaMenu;
  if (showCeremonial) {
    matchaFruityToDisplay = filterMatchaByCeremonialGrade(matchaFruityToDisplay, true);
  }
  matchaFruityToDisplay = filterFlavouredMatchaByPrice(matchaFruityToDisplay, sortDescending);


  return (
    <div className="p-12">
      <div className="flex justify-center items-center">
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
          <FilterPill
            onClick={() => setShowCeremonial(!showCeremonial)}
            isActive={showCeremonial}
          >
         Ceremonial
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
        {matchaFruityToDisplay.map((item, index) => {
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
