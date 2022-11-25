import { useSelector } from "react-redux";

const CartTotal = () => {
  const itemsOnCart = useSelector((state) => state.cart.value.items);
  const subtotal = itemsOnCart
    .map((item) => item.price * item.quantity)
    .reduce((a, c) => a + c, 0);
  const discount = (subtotal * 0.1).toFixed(2);
  const total = (subtotal - discount).toFixed(2);

  return (
    <div className="cart__total">
      <h1 className="cart__title">Order Summary</h1>
      <div className="order subTotal">
        <h2 className="subtitle">Subtotal: </h2>
        <h2 className="content">{subtotal.toFixed(2)}$</h2>
      </div>
      <div className="order discount">
        <h2 className="subtitle">Discount: </h2>
        <h2 className="content">- {discount}$</h2>
      </div>
      <div className="order total">
        <h2 className="subtitle">Total: </h2>
        <h2 className="content">{total}$</h2>
      </div>
    </div>
  );
};

export default CartTotal;
