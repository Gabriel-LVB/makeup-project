const Name = ({ item, onClick }) => {
  return (
    <h2 className="item__name" onClick={() => (onClick ? onClick(item) : null)}>
      {item.name}
    </h2>
  );
};

export default Name;
