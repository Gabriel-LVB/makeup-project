import HeaderStyled from "../styles/Header.styled";
import Search from "./Search";
import Cart from "./Cart";
import ThemeTogglerBtn from "./themeToggler";

const Header = ({ setItemsToAll, theme, themeToggler }) => {
  return (
    <HeaderStyled>
      <div className="logo" onClick={() => setItemsToAll()}>
        <h1 className="logo__name">Make It Up</h1>
      </div>
      <div className="form_cart">
        <Search />
        <Cart />
        <ThemeTogglerBtn theme={theme} onClick={themeToggler} />
      </div>
    </HeaderStyled>
  );
};

export default Header;
