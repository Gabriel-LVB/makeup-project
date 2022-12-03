import styled from "styled-components";
import CartItem from "./cartItem";
import { useDispatch } from "react-redux";
import { setItemsOnCart } from "../../reducers/cart";
import { CartItemFunction } from "../../types/types";
import CartItemTypes from "../../types/cartItem";

const StyledCartItems = styled.ul`
  hr {
    border: none;
    border-top: 2px dotted var(--text-color-3);
    &:last-child {
      border: none;
    }
  }
`;

interface CartItemProps {
  onItemClick: CartItemFunction;
  itemsOnCart: CartItemTypes[];
}

function CartItems({ onItemClick, itemsOnCart }: CartItemProps) {
  const dispatch = useDispatch();

  const deleteItem: CartItemFunction = (item) => {
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
          deleteItem={deleteItem}
          onItemClick={onItemClick}
        />
      ))}
    </StyledCartItems>
  );
}

export default CartItems;
