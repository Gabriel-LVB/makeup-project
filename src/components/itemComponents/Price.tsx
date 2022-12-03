function Price({ price }: { price: string }) {
  return <h3 className="item__price">{price + "$"}</h3>;
}

export default Price;
