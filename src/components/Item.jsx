import StyledItem from "./styles/Item.styled";
import Color from "./Color";

const Item = ({ item }) => {
  console.log(item);
  const rating = () => {
    const rating = Math.round(item.rating * 2) / 2 || 5;
    let stars = [];
    for (let i = rating; i >= 0; i--) {
      if (i < 1 && i > 0) {
        stars.push(<i key={i} className="fa-solid fa-star-half-stroke"></i>);
      } else if (i >= 1) {
        stars.push(<i key={i} className="fa-solid fa-star"></i>);
      }
    }
    if (stars.length < 5) {
      for (let i = 5; stars.length < 5; i--) {
        stars.push(<i key={i} className="fa-regular fa-star"></i>);
      }
    }
    return stars;
  };

  return (
    <StyledItem className="item">
      <img src={item.image_link} alt={item.name} className="item__img" />
      <h2 className="item__name">{item.name}</h2>
      <h3 className="item__price">{item.price + "$"}</h3>
      <h4 className="item__rating">{rating()}</h4>
      <ul className="item__colors">
        {item.product_colors &&
          item.product_colors.slice(0, 10).map((color) => {
            return <Color key={color.hex_value} color={color.hex_value} />;
          })}
      </ul>
    </StyledItem>
  );
};

export default Item;
