import styled from "styled-components";
import CartItem from "./cartItem";

const StyledCartItems = styled.ul`
  .cart__items__item {
    border: 1px solid gray;
    border-radius: 50px;
    list-style-type: none;

    .img {
      object-fit: contain;
      width: 80px;
    }
  }
`;

const CartItems = ({
  items,
  setItemsOnCart,
  itemsOnCart,
  setItemToEdit,
  deleteItem,
}) => {
  return (
    <StyledCartItems className="cart__items">
      {items.map((item, i) => (
        <CartItem
          key={i}
          item={item}
          setItemsOnCart={setItemsOnCart}
          itemsOnCart={itemsOnCart}
          setItemToEdit={setItemToEdit}
          deleteItem={deleteItem}
        />
      ))}
    </StyledCartItems>
  );
};

export default CartItems;
