import ItemTypes from "../../types/item";

function Description({ item }: { item: ItemTypes }) {
  return (
    <div className="item__description">
      <p className="item__description__content">{item.description}</p>
    </div>
  );
}

export default Description;
