const Description = ({ item }) => {
  return (
    <div className="item__description">
      <p className="item__description__content">{item.description}</p>
    </div>
  );
};

export default Description;
