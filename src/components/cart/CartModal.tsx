import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setItemsOnCart,
  setCartOpened,
  setItemToEdit,
  setModalTitle,
} from "../../reducers/cart";
import Color from "../itemComponents/Color";
import StyledCartModal from "../styles/CartModal.styled";
import AddToCart from "../itemComponents/addToCart";
import BuyNow from "../itemComponents/BuyNow";
import EditBtn from "./EditBtn";
import ItemTypes, { ProductColors } from "../../types/item";
import CartItemTypes from "../../types/cartItem";
import { RootState } from "../../reducers/store";

const CartModal = ({ item }: { item: ItemTypes | CartItemTypes }) => {
  const dispatch = useDispatch();
  const itemsOnCart = useSelector((state: RootState) => state.cart.value.items);
  const title = useSelector((state: RootState) => state.cart.value.modalTitle);
  const [selectedColor, setSelectedColor] = useState<ProductColors | null>(
    (item as CartItemTypes).selected_color || null
  );
  const [itemQuantity, setItemQuantity] = useState(
    (item as CartItemTypes).quantity || 1
  );
  const [quantityValue, setQuantityValue] = useState(
    (item as CartItemTypes).quantity || 1
  );
  const [advice, setAdvice] = useState("");

  function cartItem({
    name,
    brand,
    img,
    product_colors,
    selected_color,
    price,
    quantity,
  }: CartItemTypes) {
    return {
      name,
      brand,
      img,
      product_colors,
      selected_color,
      price,
      quantity,
    };
  }

  useEffect(() => {
    const colors = document.querySelectorAll(".modal__color");
    for (let i = 0; i < colors.length; i++) {
      const color = colors[i];
      if (
        selectedColor &&
        color.getAttribute("color") === selectedColor.hex_value
      ) {
        color.classList.add("selected");
      }
    }
  }, [selectedColor]);

  const addItemToCart = () => {
    if (!!colors[0] && selectedColor === null) {
      setAdvice("*You must select the color to continue");
    } else {
      let equalItem = itemsOnCart.find(
        (itemOnCart) =>
          itemOnCart.name === item.name &&
          (!selectedColor
            ? true
            : selectedColor &&
              itemOnCart.selected_color!.hex_value === selectedColor.hex_value)
      );
      if (!!equalItem) {
        const index = itemsOnCart.indexOf(equalItem);
        let newItems = JSON.parse(JSON.stringify(itemsOnCart));
        newItems[index].quantity += itemQuantity;
        dispatch(setItemsOnCart(newItems));
        closeModal();
        goToCart();
      } else {
        const newItem = cartItem({
          name: item.name,
          brand: item.brand,
          img: (item as ItemTypes).image_link,
          product_colors: JSON.parse(JSON.stringify(item.product_colors)),
          selected_color: selectedColor,
          price: item.price,
          quantity: itemQuantity,
        });
        dispatch(setItemsOnCart(itemsOnCart.concat(newItem)));
        closeModal();
        goToCart();
      }
    }
  };

  const onColorClick = (e: React.MouseEvent, color: ProductColors) => {
    const target = e.target as Element;
    if (selectedColor === color) {
      setSelectedColor(null);
    } else {
      setSelectedColor(color);
    }
    const colors = document.querySelectorAll(".modal__color");
    colors.forEach((col) => {
      target.getAttribute("color") !== col.getAttribute("color") &&
        col.classList.remove("selected");
    });
    target.classList.toggle("selected");
  };

  const closeModal = () => {
    document.querySelector(".cart__modal")!.classList.remove("open");
    setAdvice("");
    setQuantityValue(1);
    setItemQuantity(1);
    setSelectedColor(null);
    const colors = document.querySelectorAll(".modal__color");
    colors.forEach((col) => {
      col.classList.remove("selected");
    });
    setTimeout(() => {
      dispatch(setItemToEdit(null));
      dispatch(setModalTitle(""));
    }, 500);
  };

  const goToCart = () => {
    if (title === "Buy Now") {
      setTimeout(() => {
        dispatch(setCartOpened(true));
      }, 500);
    }
  };

  const editItem = () => {
    if (!!colors[0] && selectedColor === null) {
      setAdvice("*You must select the color to continue");
    } else {
      let newItems: CartItemTypes[] = JSON.parse(JSON.stringify(itemsOnCart));
      let previousItem = newItems.find(
        (previous) =>
          previous.name === item.name &&
          (!selectedColor && !previous.selected_color
            ? true
            : previous.selected_color!.hex_value ===
              (item as CartItemTypes).selected_color!.hex_value)
      );
      newItems = newItems.filter((item) => item !== previousItem);

      let newItem: CartItemTypes = JSON.parse(JSON.stringify(previousItem));
      newItem.quantity = itemQuantity;
      newItem.selected_color = selectedColor;

      let equalItem = newItems.find(
        (itemOnCart) =>
          itemOnCart.name === newItem.name &&
          (!selectedColor && !itemOnCart.selected_color
            ? true
            : itemOnCart.selected_color!.hex_value ===
              newItem.selected_color!.hex_value)
      );
      if (!!equalItem) {
        const index = newItems.indexOf(equalItem);
        newItems[index].quantity += itemQuantity;
      } else {
        newItems.unshift(newItem);
      }
      dispatch(setItemsOnCart(newItems));
      closeModal();
    }
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
    <StyledCartModal
      className={title === "Edit Item" ? "cart__modal open" : "cart__modal"}
    >
      <div className="bg" onClick={() => closeModal()}></div>
      <div className="content">
        <div className="price">
          <h1>{(+item.price * itemQuantity).toFixed(2)}$</h1>
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
                  ? (setItemQuantity(1), setQuantityValue(1))
                  : quantityValue > 10
                  ? (setItemQuantity(10), setQuantityValue(10))
                  : setItemQuantity(quantityValue);
              }}
            />
          </div>
          {(title === "Add to Cart" && (
            <AddToCart className="modal__btn" onClick={addItemToCart} />
          )) ||
            (title === "Buy Now" && (
              <BuyNow className="modal__btn" onClick={addItemToCart} />
            )) || (
              <EditBtn onClick={editItem} item={null} setItemToEdit={null} />
            )}
        </div>
      </div>
    </StyledCartModal>
  );
};

export default CartModal;
