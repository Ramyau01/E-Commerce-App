import { nanoid } from "nanoid";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

import beauty from "../assets/beauty.jpg";

import electronics from "../assets/electronics.jpg";
import women from "../assets/women.jpg";
import men from "../assets/men.jpg";
import homedecor from "../assets/homedecor.jpg";
export const links = [
  { id: nanoid(), text: "men", url: "products?category=men's clothing" },
  { id: nanoid(), text: "women", url: "products?category=women's clothing" },
  { id: nanoid(), text: "electronics", url: "products?category=electronics" },
  { id: nanoid(), text: "home", url: "products?category=all" },
  { id: nanoid(), text: "beauty", url: "products?category=jewelery" },
];

export const carouselImages = [
  { id: nanoid(), source: hero1 },
  { id: nanoid(), source: hero2 },
  { id: nanoid(), source: hero3 },
  { id: nanoid(), source: hero4 },
];

export const CategoryImages = [
  {
    id: nanoid(),
    source: beauty,
    url: "products?category=jewelery",
    category: "Beauty",
  },
  {
    id: nanoid(),
    source: electronics,
    url: "products?category=electronics",
    category: "Electronics",
  },
  {
    id: nanoid(),
    source: women,
    url: "products?category=women's clothing",
    category: "Women",
  },
  {
    id: nanoid(),
    source: men,
    url: "products?category=men's clothing",
    category: "Men",
  },
  {
    id: nanoid(),
    source: homedecor,
    url: "products?category=all",
    category: "Home & Living",
  },
];

export const sortOptions = [
  { id: 1, label: "Featured", value: "true", name: "featured", checked: false },
  { id: 2, label: "Order: A - Z", value: "a-z", name: "order", checked: false },
  { id: 3, label: "Order: Z - A", value: "z-a", name: "order", checked: false },
  {
    id: 4,
    label: "Price: High - Low",
    value: "high",
    name: "order",
    checked: false,
  },
  {
    id: 5,
    label: "Price: Low - High",
    value: "low",
    name: "order",
    checked: false,
  },
];

export const filterOptions = [
  { id: 1, label: "Price", checked: false },
  { id: 2, label: "Category", checked: false },
  { id: 3, label: "Brand", checked: false },
];
