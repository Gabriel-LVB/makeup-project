import GlobalStyles from "./components/styles/Global.styles";
import Header from "./components/header";
import SideNav from "./components/sideNav";
import dataBase from "./db.json";
import { useEffect, useState } from "react";
import Items from "./components/items";

function App() {
  const [items, setItems] = useState(dataBase.items);
  const [brandNames, setBrandNames] = useState([]);
  const [categoryNames, setCategoryNames] = useState([]);
  const [tagNames, setTagNames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
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

  const lastItemIndex = currentPage * 10;
  const firstItemIndex = lastItemIndex - 10;
  const currentItems = items.slice(firstItemIndex, lastItemIndex);

  return (
    <div>
      <GlobalStyles />
      <Header />
      <SideNav
        brandNames={brandNames}
        categoryNames={categoryNames}
        tagNames={tagNames}
      />
      <Items
        items={items}
        currentItems={currentItems}
        title="All Products"
        pageSetter={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
