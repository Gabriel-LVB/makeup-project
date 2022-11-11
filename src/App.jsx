import GlobalStyles from "./components/styles/Global.styles";
import Header from "./components/header";
import SideNavBtn from "./components/SideNavBtn";
// import dataBase from "./db.json";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const getInitialItems = () => {
    // let tags = [];
    // console.log(
    //   new Set(
    //     dataBase.items.map((item) => item.brand && item.brand.replace("_", " "))
    //   )
    // );
    // console.log(
    //   new Set(
    //     dataBase.items.map(
    //       (item) => item.category && item.category.replace("_", " ")
    //     )
    //   )
    // );
    // dataBase.items.map((item) =>
    //   item.tag_list.map((tag) => {
    //     tag && tags.push(tag);
    //   })
    // );
    // console.log(new Set(tags));
  };

  useEffect(getInitialItems, []);
  return (
    <div>
      <GlobalStyles />
      <SideNavBtn />
      <Header />
    </div>
  );
}

export default App;
