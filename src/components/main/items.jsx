import StyledItems from "../styles/Items.styled";
import Item from "./Item";
import Pagination from "./pagination";

const Items = ({
  currentItems,
  items,
  title,
  pageSetter,
  currentPage,
  searchedName,
  noProductFound,
  openItem,
}) => {
  return (
    <StyledItems className="items">
      <h1 className="title">{title}</h1>
      {searchedName && (
        <h2 className="subtitle">Showing results for "{searchedName}"</h2>
      )}

      <Pagination
        items={items}
        pageSetter={pageSetter}
        currentPage={currentPage}
      />
      {(currentItems.length > 0 &&
        currentItems.map((item) => (
          <Item key={item.id} item={item} openItem={openItem} />
        ))) ||
        (noProductFound && <h1>No Product Found :/</h1>)}
      <Pagination
        items={items}
        pageSetter={pageSetter}
        currentPage={currentPage}
      />
    </StyledItems>
  );
};

export default Items;
