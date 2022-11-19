import StyledCart from "../styles/cartOpened.styled";
import CartItems from "./cartItems";
import CartModal from "./CartModal";
import CartIcon from "../icons/CartIcon";

import ChooseNewProducts from "./ChooseNewProducts";
import { useState } from "react";

const CartOpen = ({ items, setItemsOnCart, itemsOnCart, setItemsToAll }) => {
  const [itemToEdit, setItemToEdit] = useState(null);

  const deleteItem = (item) => {
    setItemsOnCart(
      [...itemsOnCart].filter((itemOnCart) => itemOnCart !== item)
    );
  };

  return (
    <StyledCart>
      <h1 className="title">My Cart</h1>
      {(!!items[0] && (
        <CartItems
          items={items}
          setItemsOnCart={setItemsOnCart}
          itemsOnCart={itemsOnCart}
          setItemToEdit={setItemToEdit}
          deleteItem={deleteItem}
        />
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
    </StyledCart>
  );
};

export default CartOpen;
