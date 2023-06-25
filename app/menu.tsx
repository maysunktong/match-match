export interface Cookies {
  name: string;
  price: number;
  "gluten-free": boolean;
  image?: string;
}

type ColdWhiskLiquidType = "Lactose-Free" | "Soy" | "Almond";

export interface ColdWhisk {
  name: string;
  price: number;
  types_of_liquids: ColdWhiskLiquidType[];
  image?: string;
  trio: boolean;
}

export interface FlavoredMatcha {
  name: string;
  price: number;
  origin: string;
  image: string;
  quality: {
    ceremonial_grade: boolean;
    culinary_grade: boolean;
  };
}

export interface SodaCan {
  name: string;
  price: number;
  image: string
}

export const CookiesMenu: Cookies[] = [
  {
    name: "Matcha Cookies with Chocolate Chips",
    price: 65,
    "gluten-free": true,
    image:
      "https://res.cloudinary.com/maysunktong/image/upload/v1687283486/cookie_matcha_choc_cpemtd.svg",
  },
  {
    name: "Matcha Cookies with White Chocolate Chips",
    price: 65,
    "gluten-free": true,
    image:
      "https://res.cloudinary.com/maysunktong/image/upload/v1687283313/Cookie-bag-matcha-white-choc_pwygil.svg",
  },
  {
    name: "Matcha Cookies with Caramel Bits",
    price: 65,
    "gluten-free": true,
    image:
      "https://res.cloudinary.com/maysunktong/image/upload/v1687283340/Cookie-bag-matcha-caramel_qlss1e.svg",
  },
  {
    name: "Sakura Cookies",
    price: 45,
    "gluten-free": true,
    image:
      "https://res.cloudinary.com/maysunktong/image/upload/v1687283190/sakua_ivzezy.svg",
  },
  {
    name: "Dark Chocolate Cookies",
    price: 35,
    "gluten-free": false,
    image:
      "https://res.cloudinary.com/maysunktong/image/upload/v1687282986/Cookie-bag-dark_eb5whe.svg",
  },
  {
    name: "Chai Tea Cookies",
    price: 65,
    "gluten-free": false,
    image:
      "https://res.cloudinary.com/maysunktong/image/upload/v1687282986/Cookie-bag-chai_h9rrol.svg",
  },
  {
    name: "Coffee Cookies",
    price: 65,
    "gluten-free": false,
    image:
      "https://res.cloudinary.com/maysunktong/image/upload/v1687283504/coffee_cjkalz.svg",
  },
];

export const ColdWhiskMenu: ColdWhisk[] = [
  {
    name: "Matcha Cold Whisk Latte",
    price: 65,
    trio: false,
    types_of_liquids: ["Lactose-Free"],
    image:
      "https://res.cloudinary.com/maysunktong/image/upload/v1687479729/Cups_gftt01.svg",
  },
  {
    name: "Chai Latte",
    price: 49,
    trio: false,
    types_of_liquids: ["Lactose-Free", "Soy", "Almond"],
    image:
      "https://res.cloudinary.com/maysunktong/image/upload/v1687479729/Group_16_ngksg9.svg",
  },
  {
    name: "Local Brew Latte",
    price: 59,
    trio: false,
    types_of_liquids: ["Lactose-Free", "Soy", "Almond"],
    image:
      "https://res.cloudinary.com/maysunktong/image/upload/v1687479729/Group_15_liw40o.svg",
  },
  {
    name: "Matcha Local Brew Trio",
    price: 79,
    trio: true,
    types_of_liquids: ["Lactose-Free"],
    image:
      "https://res.cloudinary.com/maysunktong/image/upload/v1687638543/trio-local_j3tmme.svg",
  },
  {
    name: "Matcha Chai Trio",
    price: 79,
    trio: true,
    types_of_liquids: ["Lactose-Free", "Soy"],
    image:
      "https://res.cloudinary.com/maysunktong/image/upload/v1687638542/trio-chai_ksqmfw.svg",
  },
];

export const FlavoredMatchaMenu: FlavoredMatcha[] = [
  {
    name: "Matcha with Coconut Water",
    price: 75,
    origin: "Samidori",
    image:
      "https://res.cloudinary.com/maysunktong/image/upload/v1687637613/coconut_pebwl5.svg",
    quality: {
      ceremonial_grade: true,
      culinary_grade: false,
    },
  },
  {
    name: "Matcha Soda with Lavender Syrup",
    price: 65,
    origin: "Uji",
    image:
      "https://res.cloudinary.com/maysunktong/image/upload/v1687637728/lavender_qxfjyw.svg",
    quality: {
      ceremonial_grade: true,
      culinary_grade: false,
    },
  },
  {
    name: "Matcha Soda with Rose Syrup",
    price: 65,
    origin: "Yama",
    image:
      "https://res.cloudinary.com/maysunktong/image/upload/v1687637728/rose_pgp2jl.svg",
    quality: {
      ceremonial_grade: true,
      culinary_grade: false,
    },
  },
  {
    name: "Matcha Soda with Peach Syrup",
    price: 65,
    origin: "Hikari",
    image:
      "https://res.cloudinary.com/maysunktong/image/upload/v1687637728/peach_au9t5y.svg",
    quality: {
      ceremonial_grade: false,
      culinary_grade: true,
    },
  },
  {
    name: "Matcha Soda with Strawberry Syrup",
    price: 65,
    origin: "Kaori",
    image:
      "https://res.cloudinary.com/maysunktong/image/upload/v1687637728/strawberry_rgdfvc.svg",
    quality: {
      ceremonial_grade: true,
      culinary_grade: false,
    },
  },
  {
    name: "Matcha Soda with Lemon Flavor",
    price: 65,
    origin: "Kaori",
    image:
      "https://res.cloudinary.com/maysunktong/image/upload/v1687637728/lemon_rokkwr.svg",
    quality: {
      ceremonial_grade: false,
      culinary_grade: true,
    },
  },
  {
    name: "Matcha Soda with Passionfruit Flavor",
    price: 65,
    origin: "Kaori",
    image:
      "https://res.cloudinary.com/maysunktong/image/upload/v1687637727/passionfruit_eaj2dp.svg",
    quality: {
      ceremonial_grade: false,
      culinary_grade: true,
    },
  },
];

export const SodaCanMenu: SodaCan[] = [
  {
    name: "Uji Soda + Lemon",
    price: 35,
    image: "https://res.cloudinary.com/maysunktong/image/upload/v1687646916/uji_agtbr9.svg"
  },
  {
    name: "Uji Soda + Peach",
    price: 25,
    image: "https://res.cloudinary.com/maysunktong/image/upload/v1687646954/peach_pllvbs.svg"
  },
  {
    name: "Uji Soda + Rose",
    price: 25,
    image: "https://res.cloudinary.com/maysunktong/image/upload/v1687646915/rose_svcqev.svg"
  },
  {
    name: "Uji Soda + Yuzu",
    price: 35,
    image: "https://res.cloudinary.com/maysunktong/image/upload/v1687646916/yuzu_ng8jli.svg"
  },
];
