import GlobalStyles from "./components/styles/Global.styles";
import Header from "./components/header/header";
import SideNav from "./components/sideNav/sideNav";
import dataBase from "./db.json";
import { useEffect, useState } from "react";
import Items from "./components/main/items";
import ItemOpened from "./components/main/itemOpened";
import CartOpen from "./components/cart/cartOpened";

function App() {
  const [items, setItems] = useState(dataBase.items);
  const [brandNames, setBrandNames] = useState([]);
  const [categoryNames, setCategoryNames] = useState([]);
  const [tagNames, setTagNames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsTitle, setItemsTitle] = useState("All Products");
  const [search, setSearch] = useState("");
  const [searchedName, setSearchedName] = useState(null);
  const [searchedItems, setSearchedItems] = useState(null);
  const [itemOpened, setItemOpened] = useState(null);
  const [cartOpened, setCartOpened] = useState(false);
  const [itemsOnCart, setItemsOnCart] = useState([]);
  const [modalTitle, setModalTitle] = useState("");

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
      item.tag_list.map((tag) => tag && tags.push(tag))
    );
    setTagNames(Array.from(new Set(tags)));
    setItemsOnCart(getItemsFromLocalStorage() || []);
  };

  useEffect(getInitialItems, []);

  useEffect(() => {
    scrollToTop();
  }, [currentPage, items, searchedItems, itemOpened]);

  useEffect(() => {
    let items = {};
    itemsOnCart &&
      itemsOnCart.map((item, index) => (items[index] = JSON.stringify(item)));
    window.localStorage.setItem("items", JSON.stringify(items));
  }, [itemsOnCart]);

  const getItemsFromLocalStorage = () => {
    const itemsOnStorage = JSON.parse(window.localStorage.getItem("items"));
    return (
      !!itemsOnStorage &&
      Object.keys(itemsOnStorage).map(
        (index) => index && JSON.parse(itemsOnStorage[index])
      )
    );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onListItemClick = (name, title) => {
    setItemsTitle(`${title}: ${name}`);
    title =
      title === "categories"
        ? "category"
        : title === "brands"
        ? "brand"
        : "tag_list";
    name = title === "category" ? name.replace(" ", "_") : name;
    const filteredItems = dataBase.items.filter((item) =>
      title !== "tag_list" ? item[title] === name : item.tag_list.includes(name)
    );
    setItems(filteredItems);
    setCurrentPage(1);
    setSearchedName("");
    setSearchedItems("");
    setItemOpened(null);
    setCartOpened(false);
  };

  const setItemsToAll = () => {
    setItems(dataBase.items);
    setCurrentPage(1);
    setItemsTitle("All Products");
    setSearchedName(null);
    setSearchedItems(null);
    setItemOpened(null);
    setCartOpened(false);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    setSearchedName(search);
    const newItems = items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchedItems(newItems.length > 0 ? newItems : []);
    setCurrentPage(1);
    setSearch("");
    setItemOpened(null);
    setCartOpened(false);
  };

  const openItem = (item) => {
    setItemOpened(item);
  };

  const openCartModal = (title) => {
    setModalTitle(title);
    document.querySelector(".cart__modal").classList.add("open");
  };

  const lastItemIndex = currentPage * 10;
  const firstItemIndex = lastItemIndex - 10;
  const currentItems = (searchedItems || items).slice(
    firstItemIndex,
    lastItemIndex
  );

  return (
    <div>
      <GlobalStyles />
      <Header
        setItemsToAll={setItemsToAll}
        search={search}
        setSearch={setSearch}
        title={itemsTitle}
        onSearchSubmit={onSearchSubmit}
        setCartOpened={setCartOpened}
      />
      <SideNav
        brandNames={brandNames}
        categoryNames={categoryNames}
        tagNames={tagNames}
        onListItemClick={onListItemClick}
      />

      {(cartOpened && (
        <CartOpen
          items={itemsOnCart}
          setItemsOnCart={setItemsOnCart}
          itemsOnCart={itemsOnCart}
          openCartModal={openCartModal}
          modalTitle={modalTitle}
          setItemsToAll={setItemsToAll}
        />
      )) ||
        (itemOpened && (
          <ItemOpened
            item={itemOpened}
            setItemsOnCart={setItemsOnCart}
            itemsOnCart={itemsOnCart}
            setCartOpen={setCartOpened}
            openCartModal={openCartModal}
            modalTitle={modalTitle}
          />
        )) || (
          <Items
            items={searchedItems || items}
            currentItems={currentItems}
            title={itemsTitle}
            pageSetter={setCurrentPage}
            currentPage={currentPage}
            searchedName={searchedName}
            noProductFound={!!searchedItems}
            openItem={openItem}
          />
        )}
    </div>
  );
}

export default App;
