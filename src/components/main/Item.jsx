import StyledItem from "../styles/Item.styled";
import Colors from "../itemComponents/Colors";
import Rating from "../itemComponents/Rating";
import Price from "../itemComponents/Price";
import Image from "../itemComponents/Image";
import Name from "../itemComponents/Name";

const Item = ({ item, openItem }) => {
  return (
    <StyledItem className="item">
      <Image item={item} onClick={openItem} />
      <Name item={item} onClick={openItem} />
      <Price price={item.price} />
      <Rating itemRating={item.rating} />
      <Colors colors={item.product_colors} />
    </StyledItem>
  );
};

export default Item;
