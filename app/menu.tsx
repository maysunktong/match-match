export interface Cookies {
  name: string;
  price: number;
  "gluten-free": boolean;
  image?: string;
}

export interface ColdLatte {
  name: string;
  price: number;
  origin: string;
  types_of_liquids: string[];
}

export interface FlavoredMatcha {
  name: string;
  price: number;
  breed: string;
  quality: {
    ceremonial_grade: boolean;
    culinary_grade: boolean;
  };
}

export interface SodaCan {
  name: string;
  price: number;
}




export const CookiesMenu: Cookies[] = [
  {
    name: "Matcha Cookies with Chocolate Chips",
    price: 65,
    "gluten-free": true,
    image: 'https://res.cloudinary.com/maysunktong/image/upload/v1687283486/cookie_matcha_choc_cpemtd.svg'
  },
  {
    name: "Matcha Cookies with White Chocolate Chips",
    price: 65,
    "gluten-free": true,
    image: 'https://res.cloudinary.com/maysunktong/image/upload/v1687283313/Cookie-bag-matcha-white-choc_pwygil.svg'
  },
  {
    name: "Matcha Cookies with Caramel Bits",
    price: 65,
    "gluten-free": true,
    image: 'https://res.cloudinary.com/maysunktong/image/upload/v1687283340/Cookie-bag-matcha-caramel_qlss1e.svg'
  },
  {
    name: "Sakura Cookies",
    price: 45,
    "gluten-free": true,
    image: 'https://res.cloudinary.com/maysunktong/image/upload/v1687283190/sakua_ivzezy.svg'
  },
  {
    name: "Dark Chocolate Cookies",
    price: 35,
    "gluten-free": false,
    image: 'https://res.cloudinary.com/maysunktong/image/upload/v1687282986/Cookie-bag-dark_eb5whe.svg'
  },
  {
    name: "Chai Tea Cookies",
    price: 65,
    "gluten-free": false,
    image: 'https://res.cloudinary.com/maysunktong/image/upload/v1687282986/Cookie-bag-chai_h9rrol.svg'
  },
  {
    name: "Coffee Cookies",
    price: 65,
    "gluten-free": false,
    image: 'https://res.cloudinary.com/maysunktong/image/upload/v1687283504/coffee_cjkalz.svg'
  }
];

export const ColdLatteMenu: ColdLatte[] = [
  {
    name: "Matcha Cold Whisk Latte",
    price: 65,
    origin: "Japan",
    types_of_liquids: ["Lactose-free", "Soy", "Almond"],

  },
  {
    name: "Chai Latte",
    price: 65,
    origin: "India",
    types_of_liquids: ["Lactose-free", "Soy", "Almond"],
  },
  {
    name: "Local Brew Latte",
    price: 65,
    origin: "Thailand",
    types_of_liquids: ["Lactose-free", "Soy", "Almond"]
  },
];


export const FlavoredMatchaMenu: FlavoredMatcha[] = [
  {
    name: "Matcha with Coconut Water",
    price: 65,
    breed: "Samidori",
    quality: {
      ceremonial_grade: true,
      culinary_grade: false,
    },
  },
  {
    name: "Matcha Soda with Lavender Syrup",
    price: 65,
    breed: "Uji",
    quality: {
      ceremonial_grade: true,
      culinary_grade: false,
    },
  },
  {
    name: "Matcha Soda with Rose Syrup",
    price: 65,
    breed: "Yama",
    quality: {
      ceremonial_grade: true,
      culinary_grade: true,
    },
  },
  {
    name: "Matcha Soda with Peach Syrup",
    price: 65,
    breed: "Hikari",
    quality: {
      ceremonial_grade: false,
      culinary_grade: true,
    },
  },
  {
    name: "Matcha Soda with Strawberry Syrup",
    price: 65,
    breed: "Kaori",
    quality: {
      ceremonial_grade: false,
      culinary_grade: true,
    },
  },
  {
    name: "Matcha Soda with Lemon Flavor",
    price: 65,
    breed: "Kaori",
    quality: {
      ceremonial_grade: false,
      culinary_grade: true,
    },
  }
];


export const SodaCanMenu: SodaCan[] = [
  {
    name: "Uji Soda + Lemon",
    price: 25,
  },
  {
    name: "Uji Soda + Peach",
    price: 25,
  },
  {
    name: "Uji Soda + Rose",
    price: 25,
  },
  {
    name: "Uji Soda + Yuzu",
    price: 25,
  }
];
