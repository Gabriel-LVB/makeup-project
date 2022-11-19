import Color from "../itemComponents/Color";
import EditBtn from "./EditBtn";
import DeleteBtn from "./DeleteBtn";

const CartItem = ({ item, setItemToEdit, deleteItem }) => {
  return (
    <li className="cart__items__item">
      <img className="img" src={item.img} alt={item.name} />
      <h2 className="name">{item.name}</h2>
      <h3 className="brand">Brand: {item.brand}</h3>
      <h3 className="quantity">quantity: {item.quantity}</h3>
      {item.selected_color && (
        <h3 className="color">
          Color: <Color color={item.selected_color} />
        </h3>
      )}
      <EditBtn setItemToEdit={setItemToEdit} item={item} />
      <DeleteBtn onClick={() => deleteItem(item)} />
    </li>
  );
};

export default CartItem;
