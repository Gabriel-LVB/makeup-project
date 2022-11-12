import StyledItems from "./styles/Items.styled";
import Item from "./Item";

const Items = ({ items, title }) => {
  return (
    <StyledItems className="items">
      <h1 className="title">{title}</h1>
      {items && items.map((item) => <Item item={item} />)}
    </StyledItems>
  );
};

export default Items;
