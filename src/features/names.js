import db from "../db.json";

const dataBase = db.items;

export const brandNames = Array.from(
  new Set(
    dataBase
      .filter((item) => item.brand !== null && item.brand.length > 0)
      .map((item) => item.brand && item.brand.replace("_", " "))
  )
);
export const categoryNames = Array.from(
  new Set(
    dataBase
      .filter((item) => item.category !== null && item.category.length > 0)
      .map((item) => item.category && item.category.replace("_", " "))
  )
);

let tags = [];
dataBase.map((item) => item.tag_list.map((tag) => tag && tags.push(tag)));

export const tagNames = Array.from(new Set(tags));
