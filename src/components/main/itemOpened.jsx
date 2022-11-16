import StyledItemOpened from "../styles/itemOpened.styled";
import Rating from "../itemComponents/Rating";
import Image from "../itemComponents/Image";
import Name from "../itemComponents/Name";
import Price from "../itemComponents/Price";
import Details from "../itemComponents/Details";
import Colors from "../itemComponents/Colors";
import AddToCart from "../itemComponents/addToCart";
import BuyNow from "../itemComponents/BuyNow";

const ItemOpened = ({ item }) => {
  console.log(item);
  return (
    <StyledItemOpened>
      <Image item={item} />
      <Name item={item} />
      <Price price={item.price} />
      <Rating itemRating={item.rating} showNumber={true} />
      <h3 className="item__sold">{item.id} Sold</h3>
      <Colors colors={item.product_colors} showNames={true} />
      <Details item={item} />
      <div className="item__btns">
        <AddToCart />
        <BuyNow />
      </div>
    </StyledItemOpened>
  );
};

export default ItemOpened;
