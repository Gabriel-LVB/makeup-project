import StyledBtn from "../styles/Button.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { searchFor } from "../../reducers/search";

const Search = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const items = useSelector((state) => state.items.value.items);
  const title = useSelector((state) => state.items.value.title);

  const searcher = (string) => {
    return string.toLowerCase().includes(search.toLowerCase());
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    const newItems = items.filter(
      (item) => searcher(item.name) || searcher(item.description)
    );
    dispatch(
      searchFor({
        name: search,
        items: newItems.length > 0 ? newItems : [],
      })
    );
    setSearch("");
    // setCurrentPage(1);
    // setItemOpened(null);
    // setCartOpened(false);
  };

  return (
    <form className="search" onSubmit={onSearchSubmit}>
      <input
        type="text"
        className="search__input"
        placeholder={`Search in ${title}`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <StyledBtn className="search__btn">
        <i className="fa-solid fa-magnifying-glass"></i>
      </StyledBtn>
    </form>
  );
};

export default Search;
