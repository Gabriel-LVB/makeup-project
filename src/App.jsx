import GlobalStyles from "./components/styles/Global.styles";
import Header from "./components/header";
import SideNav from "./components/sideNav";
import dataBase from "./db.json";
import { useEffect, useState } from "react";
import Item from "./components/Item";
import Items from "./components/items";

function App() {
  const [items, setItems] = useState(dataBase.items);
  const [brandNames, setBrandNames] = useState([]);
  const [categoryNames, setCategoryNames] = useState([]);
  const [tagNames, setTagNames] = useState([]);
  const getInitialItems = () => {
    setBrandNames(
      Array.from(
        new Set(
          dataBase.items
            .filter((item) => item.brand !== null && item.brand.length > 0)
            .map((item) => item.brand && item.brand.replace("_", " "))
        )
      )
    );
    setCategoryNames(
      Array.from(
        new Set(
          dataBase.items
            .filter(
              (item) => item.category !== null && item.category.length > 0
            )
            .map((item) => item.category && item.category.replace("_", " "))
        )
      )
    );
    let tags = [];
    dataBase.items.map((item) =>
      item.tag_list.map((tag) => {
        tag && tags.push(tag);
      })
    );
    setTagNames(Array.from(new Set(tags)));
  };

  useEffect(getInitialItems, []);
  return (
    <div>
      <GlobalStyles />
      <Header />
      <SideNav
        brandNames={brandNames}
        categoryNames={categoryNames}
        tagNames={tagNames}
      />
      <Items items={items} title="All Products" />
    </div>
  );
}

export default App;
