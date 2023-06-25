// filters.js
import { Cookies, ColdWhisk, FlavoredMatcha, SodaCan } from './menu';

export function filterCookiesByGlutenFree(cookies: Cookies[], glutenFree: boolean) {
  return cookies.filter(cookie => cookie['gluten-free'] === glutenFree);
}

// filter cookies price ascending and decending
export function filterCookiesByPrice(cookies: Cookies[], decending: boolean) {
  return cookies.sort((a, b) => {
    if (decending) {
      return b.price - a.price;
    } else {
      return a.price - b.price;
    }
  }
  );
}

export function filterColdWhiskByPrice(coldwhisk: ColdWhisk[], descending: boolean) {
  return coldwhisk.sort((a, b) => {
    if (descending) {
      return b.price - a.price;
    } else {
      return a.price - b.price;
    }
  }
  );
}

export function filterFlavouredMatchaByPrice(flavoredMatcha: FlavoredMatcha[], descending: boolean) {
  return flavoredMatcha.sort((a, b) => {
    if (descending) {
      return b.price - a.price;
    } else {
      return a.price - b.price;
    }
  }
  );
}

export function filterSodaByPrice(sodaCans: SodaCan[], descending: boolean) {
  return sodaCans.sort((a, b) => {
    if (descending) {
      return b.price - a.price;
    } else {
      return a.price - b.price;
    }
  }
  );
}

export function filterColdWhiskByMilk(coldwhisk: ColdWhisk[]) {
  return coldwhisk.filter(coldwhisk => coldwhisk.types_of_liquids.includes('Lactose-Free'));
}

export function filterColdWhiskBySoyMilk(coldwhisk: ColdWhisk[]) {
  return coldwhisk.filter(coldwhisk => coldwhisk.types_of_liquids.includes('Soy'));
}

export function filterColdWhiskByAlmondMilk(coldwhisk: ColdWhisk[]) {
  return coldwhisk.filter(coldwhisk => coldwhisk.types_of_liquids.includes('Almond'));
}

export function filterColdWhiskByTrio(coldwhisk: ColdWhisk[]) {
  return coldwhisk.filter(coldwhisk => coldwhisk.trio === true);
}


export function filterMatchaByCeremonialGrade(matchas: FlavoredMatcha[], ceremonialGrade: boolean) {
  return matchas.filter(matcha => matcha.quality.ceremonial_grade === ceremonialGrade);
}

export function filterSodasByFlowery(sodas: SodaCan[], name: string) {
  return sodas.filter(soda => soda.name.toLowerCase().includes('rose'));
}

export function filterSodasByFruity(sodas: SodaCan[], name: string) {
  return sodas.filter(soda => soda.name.toLowerCase().includes('lemon') || soda.name.toLowerCase().includes('yuzu') || soda.name.toLowerCase().includes('peach'));
}
