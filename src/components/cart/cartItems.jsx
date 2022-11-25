import styled from "styled-components";
import CartItem from "./cartItem";
import { useDispatch } from "react-redux";
import { setItemsOnCart } from "../../reducers/cart";

const StyledCartItems = styled.ul`
  hr {
    border: none;
    border-top: 2px dotted var(--text-color-3);
    &:last-child {
      border: none;
    }
  }
`;

const CartItems = ({ setItemToEdit, onItemClick, itemsOnCart }) => {
  const dispatch = useDispatch();

  const deleteItem = (item) => {
    dispatch(
      setItemsOnCart(
        [...itemsOnCart].filter((itemOnCart) => itemOnCart !== item)
      )
    );
  };

  return (
    <StyledCartItems className="cart__items">
      {itemsOnCart.map((item, i) => (
        <CartItem
          key={item.name + i}
          item={item}
          setItemToEdit={setItemToEdit}
          deleteItem={deleteItem}
          onItemClick={onItemClick}
        />
      ))}
    </StyledCartItems>
  );
};

export default CartItems;
