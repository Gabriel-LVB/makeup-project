import backupImage from "../../backupImage.jpg";

const Image = ({ item, onClick }) => {
  const fallbackImage = (e) => {
    console.log(e);
    e.target.src = backupImage;
  };

  return (
    <img
      src={item.image_link}
      onError={fallbackImage}
      loading="lazy"
      alt={item.name}
      className="item__img"
      onClick={() => (onClick ? onClick(item) : null)}
    />
  );
};

export default Image;
