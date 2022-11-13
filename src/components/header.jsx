import HeaderStyled from "./styles/Header.styled";
import Search from "./Search";
import Cart from "./Cart";

const Header = ({
  setItemsToAll,
  search,
  setSearch,
  title,
  onSearchSubmit,
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
        <Cart />
      </div>
    </HeaderStyled>
  );
};

export default Header;
