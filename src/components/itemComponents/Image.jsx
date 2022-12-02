import fallbackImage from "../../assets/fallbackImage.jpg";

const Image = ({ item, onClick }) => {
  const fallback = (e) => {
    console.log(e);
    e.target.src = fallbackImage;
  };

  return (
    <img
      src={item.image_link}
      onError={fallback}
      loading="lazy"
      alt={item.name}
      className="item__img"
      onClick={() => (onClick ? onClick(item) : null)}
    />
  );
};

export default Image;
