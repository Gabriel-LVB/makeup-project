import { useState } from "react";
import Color from "../itemComponents/Color";
import StyledCartModal from "../styles/CartModal.styled";
import AddToCart from "../itemComponents/addToCart";
import BuyNow from "../itemComponents/BuyNow";

const CartModal = ({ item, title, setItemsOnCart, itemsOnCart }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [quantityValue, setQuantityValue] = useState(1);
  const [advice, setAdvice] = useState("");

  const cartItem = () => {
    return {
      name: item.name,
      brand: item.brand,
      img: item.image_link,
      selected_color: selectedColor,
      price: item.price,
      quantity: itemQuantity,
    };
  };

  const addItemToCart = () => {
    let equalItem = itemsOnCart.find(
      (itemOnCart) =>
        itemOnCart.name === item.name &&
        itemOnCart.selected_color === selectedColor
    );
    if (!!colors[0] && selectedColor === null) {
      setAdvice("*You must select the color to continue");
    } else if (!!equalItem) {
      const index = itemsOnCart.indexOf(equalItem);
      let newItems = JSON.parse(JSON.stringify(itemsOnCart));
      newItems[index].quantity += itemQuantity;
      setItemsOnCart(newItems);
    } else {
      const item = cartItem();
      setAdvice("");
      setItemsOnCart(itemsOnCart.concat(item));
    }
  };

  const onColorClick = (e, color) => {
    setSelectedColor(color);
    const colors = document.querySelectorAll(".modal__color");
    colors.forEach((col) => {
      e.target.getAttribute("color") !== col.getAttribute("color") &&
        col.classList.remove("selected");
    });
    e.target.classList.toggle("selected");
  };

  const closeModal = () => {
    document.querySelector(".cart__modal").classList.remove("open");
    setAdvice("");
  };

  const colors = item.product_colors.map((color) => (
    <Color
      className="modal__color"
      key={color.hex_value}
      color={color}
      onClick={onColorClick}
    />
  ));

  return (
    <StyledCartModal className="cart__modal">
      <div className="bg" onClick={() => closeModal()}></div>
      <div className="content">
        <div className="price">
          <h1>{(item.price * itemQuantity).toFixed(2)}$</h1>
          <h3>{Number(item.price).toFixed(2)}$ each</h3>
        </div>
        <h1 className="title">{title}</h1>
        <h2 className="name">{item.name}</h2>
        <h3 className="brand">brand: {item.brand}</h3>
        {!!colors[0] && (
          <div className="colors">
            <div className="colors__title">
              <div className="colors__title__title">Select color:</div>
              <div className="modal__advice">{advice}</div>
            </div>
            <ul className="colors__content">{colors}</ul>
          </div>
        )}
        <div className="bottom">
          <div className="quantity">
            <label htmlFor="quantity">Quantity: </label>
            <input
              type="number"
              id="quantity"
              min={1}
              max={10}
              value={quantityValue}
              onChange={(e) => setQuantityValue(+e.target.value)}
              onBlur={() => {
                return quantityValue < 1
                  ? setItemQuantity(1) & setQuantityValue(1)
                  : quantityValue > 10
                  ? setItemQuantity(10) & setQuantityValue(10)
                  : setItemQuantity(quantityValue);
              }}
            />
          </div>
          {(title === "Add to Cart" && (
            <AddToCart className="modal__btn" onClick={addItemToCart} />
          )) || <BuyNow className="modal__btn" onClick={addItemToCart} />}
        </div>
      </div>
    </StyledCartModal>
  );
};

export default CartModal;
