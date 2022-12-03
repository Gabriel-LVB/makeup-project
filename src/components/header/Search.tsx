import StyledBtn from "../styles/Button.styled";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { searchFor } from "../../reducers/search";
import { RootState } from "../../reducers/store";
import { setCurrent } from "../../reducers/pagination";
import { setItemOpened } from "../../reducers/items";
import { setCartOpened } from "../../reducers/cart";

const Search = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => state.items.value.items);
  const title = useSelector((state: RootState) => state.items.value.title);

  const searcher = (string: string) => {
    return string.toLowerCase().includes(search.toLowerCase());
  };

  const onSearchSubmit = (e: React.FormEvent) => {
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
    dispatch(setCurrent(1));
    dispatch(setItemOpened(null));
    dispatch(setCartOpened(false));
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
