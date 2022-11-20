import CartIcon from "../icons/CartIcon";
import StyledBtn from "../styles/Button.styled";

const Cart = ({ setCartOpen, itemsOnCart }) => {
  const numberOfItems = itemsOnCart.length;
  const subtotal = itemsOnCart
    .map((item) => item.price * item.quantity)
    .reduce((ac, cur) => ac + cur, 0);

  return (
    <div className="cart__container">
      <StyledBtn className="cart" onClick={() => setCartOpen(true)}>
        <CartIcon />
      </StyledBtn>
      <div className="cart-infos">
        <div className="cart-infos__number">{numberOfItems} Products</div>
        <div className="cart-infos__price">
          Subtotal: {subtotal.toFixed(2)}$
        </div>
      </div>
    </div>
  );
};

export default Cart;
