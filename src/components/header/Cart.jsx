import CartIcon from "../icons/CartIcon";

const Cart = ({ setCartOpen }) => {
  return (
    <button className="cart" onClick={() => setCartOpen(true)}>
      <CartIcon />
    </button>
  );
};

export default Cart;
