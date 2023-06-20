'use client'

import { useState } from "react";
import { CookiesMenu } from "../menu";
import { filterCookiesByGlutenFree } from "../filters";

export default function Card() {
  const [showGlutenFree, setShowGlutenFree] = useState(false);

  let cookiesToDisplay = showGlutenFree
    ? filterCookiesByGlutenFree(CookiesMenu, true)
    : CookiesMenu;

  return (
    <div>
      <button
        className="px-4 py-2 mb-4 text-sm font-semibold text-white bg-green-500 rounded-lg focus:outline-none hover:bg-green-600"
        onClick={() => setShowGlutenFree(!showGlutenFree)}
      >
        {showGlutenFree ? "Show All" : "Gluten Free"}
      </button>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cookiesToDisplay.map((item, index) => {
          return (
            <div key={index} className="p-4 bg-white rounded-lg border relative">
              {item["gluten-free"] && (
                <p className="absolute top-2 right-2 text-xs bg-green-500 text-white px-2 py-1 rounded-md">
                  Gluten Free
                </p>
              )}
              <div className="flex justify-center items-center">
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
