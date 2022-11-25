import { useEffect } from "react";
import GlobalStyles from "./components/styles/Global.styles";
import { ThemeProvider } from "styled-components";
import useTheme from "./useTheme";
import { lightTheme, darkTheme } from "./theme";
import dataBase from "./db.json";
import Header from "./components/header/header";
import SideNav from "./components/sideNav/sideNav";
import ItemOpened from "./components/main/itemOpened";
import Items from "./components/main/items";
import CartOpen from "./components/cart/cartOpened";
import { setInitial, setItems, setItemOpened } from "./reducers/items";
import { clearSearch } from "./reducers/search";
import { setCurrent as setCurrentPage } from "./reducers/pagination";
import { setItemsOnCart, setCartOpened, setModalTitle } from "./reducers/cart";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Footer from "./components/footer/footer";

function App() {
  const [theme, themeToggler] = useTheme();

  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.value.items);
  const searchedItems = useSelector((state) => state.search.value.items);
  const currentPage = useSelector((state) => state.pagination.value.current);
  const itemsOnCart = useSelector((state) => state.cart.value.items);
  const cartOpened = useSelector((state) => state.cart.value.opened);
  const modalTitle = useSelector((state) => state.cart.value.modalTitle);
  const itemOpened = useSelector((state) => state.items.value.opened);

  useEffect(() => {
    // IF THERE IS ITEMS ON LOCALSTORAGE, ADD THEM TO CART
    dispatch(setItemsOnCart(getItemsFromLocalStorage() || []));
  }, [dispatch]);

  useEffect(() => {
    scrollToTop();
  }, [currentPage, items, searchedItems, itemOpened]);

  useEffect(() => {
    // EDIT LOCALSTORAGE EVERYTIME THAT ITEMS ON CART ARE EDITED
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
    const newTitle = title + ": " + name;
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
    dispatch(setItems({ items: filteredItems, title: newTitle }));
    dispatch(setCurrentPage(1));
    dispatch(clearSearch());
    dispatch(setItemOpened(null));
    dispatch(setCartOpened(false));
  };

  const setItemsToAll = () => {
    dispatch(setInitial());
    dispatch(setCurrentPage(1));
    dispatch(clearSearch());
    dispatch(setItemOpened(null));
    dispatch(setCartOpened(false));
  };

  const openCartModal = (title) => {
    dispatch(setModalTitle(title));
    document.querySelector(".cart__modal").classList.add("open");
  };

  return (
    <ThemeProvider theme={themeMode}>
      <div>
        <GlobalStyles />
        <Header
          setItemsToAll={setItemsToAll}
          theme={theme}
          themeToggler={themeToggler}
        />
        <main>
          <SideNav onListItemClick={onListItemClick} />

          {(cartOpened && (
            <CartOpen
              openCartModal={openCartModal}
              setItemsToAll={setItemsToAll}
            />
          )) ||
            (itemOpened && (
              <ItemOpened
                item={itemOpened}
                openCartModal={openCartModal}
                modalTitle={modalTitle}
              />
            )) || <Items />}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
