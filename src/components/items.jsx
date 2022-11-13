import StyledItems from "./styles/Items.styled";
import Item from "./Item";
import Pagination from "./pagination";

const Items = ({ currentItems, items, title, pageSetter, currentPage }) => {
  return (
    <StyledItems className="items">
      <h1 className="title">{title}</h1>
      <Pagination
        items={items}
        pageSetter={pageSetter}
        currentPage={currentPage}
      />
      {currentItems &&
        currentItems.map((item) => <Item key={item.id} item={item} />)}
      <Pagination
        items={items}
        pageSetter={pageSetter}
        currentPage={currentPage}
      />
    </StyledItems>
  );
};

export default Items;
