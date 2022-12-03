import StyledCart from "../styles/cartOpened.styled";
import CartItems from "./cartItems";
import CartModal from "./CartModal";
import CartIcon from "../icons/CartIcon";
import CartTotal from "./cartTotal";
import ContinueOrder from "./continueOrder";
import Congrats from "./congrats";

import ChooseNewProducts from "./ChooseNewProducts";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCartOpened,
  setItemToEdit,
  setModalTitle,
} from "../../reducers/cart";
import { setItemOpened } from "../../reducers/items";
import { RootState } from "../../reducers/store";
import CartItemTypes from "../../types/cartItem";
import ItemTypes from "../../types/item";

const CartOpen = ({ setItemsToAll }: { setItemsToAll: () => void }) => {
  const dispatch = useDispatch();
  const itemsOnCart = useSelector((state: RootState) => state.cart.value.items);
  const itemToEdit = useSelector(
    (state: RootState) => state.cart.value.itemToEdit
  );
  const allItems = useSelector<RootState, ItemTypes[]>(
    (state) => state.items.value.items
  );

  const onItemClick = (item: CartItemTypes) => {
    const itemOnAll = allItems.find(
      (thisItem) => thisItem.name === item.name && thisItem.brand === item.brand
    );
    dispatch(setItemOpened(itemOnAll));
    dispatch(setCartOpened(false));
    dispatch(setItemToEdit(null));
  };

  useEffect(() => {
    if (itemToEdit) {
      dispatch(setModalTitle("Edit Item"));
    }
  }, [itemToEdit, dispatch]);

  return (
    <StyledCart>
      <div className="cart__header">
        <h1 className="cart__title">My Cart</h1>
        {!!itemsOnCart[0] && <ContinueOrder />}
      </div>
      <hr />
      {(!!itemsOnCart[0] && (
        <>
          <CartItems itemsOnCart={itemsOnCart} onItemClick={onItemClick} />
          <hr />
          <CartTotal />
          <div className="continue__container">
            <ContinueOrder className="continue__bottom" />
          </div>
        </>
      )) || (
        <div className="no_products">
          <CartIcon />
          <h2>Your cart is empty :/</h2>
          <ChooseNewProducts onClick={setItemsToAll} />
        </div>
      )}
      {itemToEdit && <CartModal item={itemToEdit} />}
      <Congrats />
    </StyledCart>
  );
};

export default CartOpen;
