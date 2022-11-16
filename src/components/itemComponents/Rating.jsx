const Rating = ({ itemRating, showNumber = false }) => {
  const rating = Math.round(itemRating * 2) / 2 || 5;
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
  return (
    <div className="item__rating">
      <h4 className="item__rating__stars">{stars}</h4>
      {showNumber && (
        <h4 className="item__rating__number">{itemRating || "5.0"}</h4>
      )}
    </div>
  );
};

export default Rating;
