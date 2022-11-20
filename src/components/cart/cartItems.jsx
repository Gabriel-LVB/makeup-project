import styled from "styled-components";
import CartItem from "./cartItem";

const StyledCartItems = styled.ul`
  hr {
    border: none;
    border-top: 2px dotted var(--text-color-3);
    &:last-child {
      border: none;
    }
  }
`;

const CartItems = ({
  items,
  setItemsOnCart,
  itemsOnCart,
  setItemToEdit,
  deleteItem,
  onItemClick,
}) => {
  return (
    <StyledCartItems className="cart__items">
      {items.map((item, i) => (
        <CartItem
          key={item.name + i}
          item={item}
          setItemsOnCart={setItemsOnCart}
          itemsOnCart={itemsOnCart}
          setItemToEdit={setItemToEdit}
          deleteItem={deleteItem}
          onItemClick={onItemClick}
        />
      ))}
    </StyledCartItems>
  );
};

export default CartItems;
