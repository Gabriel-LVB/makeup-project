const Image = ({ item, onClick }) => {
  return (
    <img
      src={item.image_link}
      alt={item.name}
      className="item__img"
      onClick={() => (onClick ? onClick(item) : null)}
    />
  );
};

export default Image;
