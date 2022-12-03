import ItemTypes from "../../types/item";

interface NameProps {
  item: ItemTypes;
  onClick?(item: ItemTypes): void;
}

function Name({ item, onClick }: NameProps) {
  return (
    <h2 className="item__name" onClick={() => (onClick ? onClick(item) : null)}>
      {item.name}
    </h2>
  );
}

export default Name;
