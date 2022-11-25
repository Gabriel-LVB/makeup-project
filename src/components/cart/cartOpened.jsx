import StyledCart from "../styles/cartOpened.styled";
import CartItems from "./cartItems";
import CartModal from "./CartModal";
import CartIcon from "../icons/CartIcon";
import CartTotal from "./cartTotal";
import ContinueOrder from "./continueOrder";
import Congrats from "./congrats";

import ChooseNewProducts from "./ChooseNewProducts";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCartOpened, setModalTitle } from "../../reducers/cart";
import { setItemOpened } from "../../reducers/items";

const CartOpen = ({ setItemsToAll }) => {
  const dispatch = useDispatch();
  const [itemToEdit, setItemToEdit] = useState(null);
  const itemsOnCart = useSelector((state) => state.cart.value.items);
  const allItems = useSelector((state) => state.items.value.items);

  const onItemClick = (item) => {
    const itemOnAll = allItems.find(
      (thisItem) => thisItem.name === item.name && thisItem.brand === item.brand
    );
    dispatch(setItemOpened(itemOnAll));
    dispatch(setCartOpened(false));
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
          <CartItems
            itemsOnCart={itemsOnCart}
            setItemToEdit={setItemToEdit}
            onItemClick={onItemClick}
          />
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
      {itemToEdit && (
        <CartModal item={itemToEdit} setItemToEdit={setItemToEdit} />
      )}
      <Congrats />
    </StyledCart>
  );
};

export default CartOpen;
