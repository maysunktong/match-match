// filters.js
import { Cookies, ColdLatte, FlavoredMatcha, SodaCan } from './menu';

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

export function filterLattesByOrigin(lattes: ColdLatte[], origin: string) {
  return lattes.filter(latte => latte.origin === origin);
}

export function filterMatchaByCeremonialGrade(matchas: FlavoredMatcha[], ceremonialGrade: boolean) {
  return matchas.filter(matcha => matcha.quality.ceremonial_grade === ceremonialGrade);
}

export function filterSodasByName(sodas: SodaCan[], name: string) {
  return sodas.filter(soda => soda.name.includes(name));
}
