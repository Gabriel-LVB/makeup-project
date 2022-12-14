import Color from "../itemComponents/Color";
import StyledCartItem from "../styles/cartItem.styled";
import EditBtn from "./EditBtn";
import DeleteBtn from "./DeleteBtn";
import CartItemTypes from "../../types/cartItem";
import { setItemToEdit } from "../../reducers/cart";

type CartItemFunction = (item: CartItemTypes) => void;

interface CartItemProps {
  item: CartItemTypes;
  deleteItem: CartItemFunction;
  onItemClick: CartItemFunction;
}

export default function CartItem({
  item,
  deleteItem,
  onItemClick,
}: CartItemProps) {
  return (
    <>
      <StyledCartItem>
        <img
          className="img"
          src={item.img}
          alt={item.name}
          onClick={() => onItemClick(item)}
        />
        <h2 className="name" onClick={() => onItemClick(item)}>
          {item.name}
        </h2>
        <div className="price_btns">
          <div className="price">
            <h2 className="total">
              {(+item.price * item.quantity).toFixed(2)}$
            </h2>
            <h3 className="each">{Number(item.price).toFixed(2)}$</h3>
          </div>
          <div className="btns">
            <EditBtn setItemToEdit={setItemToEdit} item={item} onClick={null} />
            <DeleteBtn onClick={() => deleteItem(item)} />
          </div>
        </div>
        <h3 className="brand">{item.brand}</h3>
        <h3 className="quantity">Quantity: {item.quantity}</h3>
        {item.selected_color && (
          <ul className="color">
            Color: <Color color={item.selected_color} showName={false} />
          </ul>
        )}
      </StyledCartItem>
      <hr key={item.name + "hr"} />
    </>
  );
}
