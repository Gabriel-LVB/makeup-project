import GlobalStyles from "./components/styles/Global.styles";
import Header from "./components/header";
import SideNav from "./components/sideNav";
import dataBase from "./db.json";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [brandNames, setBrandNames] = useState([]);
  const [categoryNames, setCategoryNames] = useState([]);
  const [tagNames, setTagNames] = useState([]);
  const getInitialItems = () => {
    let tags = [];
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
    </div>
  );
}

export default App;
