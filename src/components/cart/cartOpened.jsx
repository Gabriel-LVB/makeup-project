import StyledCart from "../styles/cartOpened.styled";
import CartItems from "./cartItems";
import CartModal from "./CartModal";
import CartIcon from "../icons/CartIcon";
import CartTotal from "./cartTotal";
import ContinueOrder from "./continueOrder";
import Congrats from "./congrats";

import ChooseNewProducts from "./ChooseNewProducts";
import { useState } from "react";

const CartOpen = ({
  items,
  setItemsOnCart,
  itemsOnCart,
  setItemsToAll,
  allItems,
  setCartOpened,
  setItemOpened,
}) => {
  const [itemToEdit, setItemToEdit] = useState(null);

  const deleteItem = (item) => {
    setItemsOnCart(
      [...itemsOnCart].filter((itemOnCart) => itemOnCart !== item)
    );
  };

  const onItemClick = (item) => {
    const itemOnAll = allItems.find(
      (thisItem) => thisItem.name === item.name && thisItem.brand === item.brand
    );
    setItemOpened(itemOnAll);
    setCartOpened(false);
  };

  return (
    <StyledCart>
      <div className="cart__header">
        {!!items[0] && <h1 className="cart__title">My Cart</h1>}
        <ContinueOrder />
      </div>
      <hr />
      {(!!items[0] && (
        <>
          <CartItems
            items={items}
            setItemsOnCart={setItemsOnCart}
            itemsOnCart={itemsOnCart}
            setItemToEdit={setItemToEdit}
            deleteItem={deleteItem}
            onItemClick={onItemClick}
          />
          <hr />
          <CartTotal items={items} />
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
        <CartModal
          title={"Edit Item"}
          item={itemToEdit}
          setItemsOnCart={setItemsOnCart}
          itemsOnCart={itemsOnCart}
          setItemToEdit={setItemToEdit}
        />
      )}
      <Congrats />
    </StyledCart>
  );
};

export default CartOpen;
