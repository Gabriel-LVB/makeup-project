import HeaderStyled from "./styles/Header.styled";
import Logo from "./Logo";
import Search from "./Search";
import Cart from "./Cart";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <div className="form_cart">
        <Search />
        <Cart />
      </div>
    </HeaderStyled>
  );
};

export default Header;
