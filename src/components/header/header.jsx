import HeaderStyled from "../styles/Header.styled";
import Search from "./Search";
import Cart from "./Cart";
import ThemeTogglerBtn from "./themeToggler";

const Header = ({
  setItemsToAll,
  search,
  setSearch,
  title,
  onSearchSubmit,
  setCartOpened,
  itemsOnCart,
  theme,
  themeToggler,
}) => {
  return (
    <HeaderStyled>
      <div className="logo" onClick={() => setItemsToAll()}>
        <h1 className="logo__name">Make It Up</h1>
      </div>
      <div className="form_cart">
        <Search
          search={search}
          setSearch={setSearch}
          title={title}
          onSearchSubmit={onSearchSubmit}
        />
        <Cart setCartOpen={setCartOpened} itemsOnCart={itemsOnCart} />
        <ThemeTogglerBtn theme={theme} onClick={themeToggler} />
      </div>
    </HeaderStyled>
  );
};

export default Header;
