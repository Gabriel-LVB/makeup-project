import StyledItems from "../styles/Items.styled";
import Item from "./Item";
import Pagination from "./pagination";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNumOfPages } from "../../reducers/pagination";
import { setItemOpened } from "../../reducers/items";
import { RootState } from "../../reducers/store";
import ItemTypes from "../../types/item";

const Items = () => {
  const dispatch = useDispatch();

  const currentPage = useSelector(
    (state: RootState) => state.pagination.value.current
  );
  const items = useSelector((state: RootState) => state.items.value.items);
  const title = useSelector((state: RootState) => state.items.value.title);
  const searchedName = useSelector(
    (state: RootState) => state.search.value.name
  );
  const searchedItems = useSelector(
    (state: RootState) => state.search.value.items
  );

  const pageIndex = {
    last: currentPage * 10,
    first: currentPage * 10 - 10,
  };

  const avaliableItems = !!searchedItems[0] ? searchedItems : items;

  useEffect(() => {
    dispatch(setNumOfPages(avaliableItems));
  }, [avaliableItems, dispatch]);

  const currentItems = avaliableItems.slice(pageIndex.first, pageIndex.last);

  const noProductFound = !!searchedName && !searchedItems[0];

  const openItem = (item: ItemTypes) => {
    dispatch(setItemOpened(item));
  };
  return (
    <StyledItems className="items">
      <h1 className="title">{title}</h1>
      {searchedName && (
        <h2 className="subtitle">Showing results for "{searchedName}"</h2>
      )}

      {(noProductFound && (
        <h1 className="no-product">Oops... No product found!</h1>
      )) || (
        <>
          <Pagination currentPage={currentPage} />
          {currentItems.length > 0 &&
            currentItems.map((item) => (
              <Item key={item.id} item={item} openItem={openItem} />
            ))}
          <Pagination currentPage={currentPage} />
        </>
      )}
    </StyledItems>
  );
};

export default Items;
