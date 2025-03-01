import { nanoid } from "nanoid";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero2.webp";
import hero7 from "../assets/hero3.webp";
import hero8 from "../assets/hero4.webp";
import beauty from "../assets/beauty.jpg";
import kids from "../assets/kids.jpg";
import women from "../assets/women.jpg";
import men from "../assets/men.jpg";
import homedecor from "../assets/homedecor.jpg";
export const links = [
  { id: nanoid(), text: "men", url: "men" },
  { id: nanoid(), text: "women", url: "women" },
  { id: nanoid(), text: "kids", url: "kids" },
  { id: nanoid(), text: "home & living", url: "decor" },
  { id: nanoid(), text: "beauty", url: "beauty" },
];

export const carouselImages = [
  { id: nanoid(), source: hero1 },
  { id: nanoid(), source: hero2 },
  { id: nanoid(), source: hero3 },
  { id: nanoid(), source: hero4 },
];

export const CategoryImages = [
  { id: nanoid(), source: beauty, url: "beauty", category: "Beauty" },
  { id: nanoid(), source: kids, url: "kids", category: "Kids" },
  { id: nanoid(), source: women, url: "women", category: "Women" },
  { id: nanoid(), source: men, url: "men", category: "Men" },
  {
    id: nanoid(),
    source: homedecor,
    url: "homedecor",
    category: "Home & Living",
  },
];

export const sortOptions = [
  { id: 1, label: "Featured", checked: false },
  { id: 2, label: "Price: low to high", checked: false },
  { id: 3, label: "Price: high to low", checked: false },
];

export const filterOptions = [
  { id: 1, label: "Price", checked: false },
  { id: 2, label: "Category", checked: false },
  { id: 3, label: "Brand", checked: false },
];
