import React from "react";
import fallbackImage from "../../assets/fallbackImage.jpg";
import ItemTypes from "../../types/item";

interface ImageProps {
  item: ItemTypes;
  onClick?: (item: ItemTypes) => void;
}

function Image({ item, onClick }: ImageProps) {
  const fallback = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLImageElement;
    target.src = fallbackImage;
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
}

export default Image;
