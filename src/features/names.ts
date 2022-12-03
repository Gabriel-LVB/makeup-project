import db from "../db.json";

const dataBase = db.items;

export const brandNames = Array.from(
  new Set(
    dataBase
      .filter((item) => item.brand !== null && item.brand.length > 0)
      .map((item) => item.brand && item.brand.replace("_", " "))
  )
);
export const categoryNames: string[] = Array.from(
  new Set(
    dataBase
      .filter((item) => item.category !== null && item.category.length > 0)
      .map((item) => item.category! && item.category.replace("_", " "))
  )
);

let tags: string[] = [];
dataBase.map((item) =>
  item.tag_list.map((tag: string) => tag && tags.push(tag))
);

export const tagNames = Array.from(new Set(tags));
