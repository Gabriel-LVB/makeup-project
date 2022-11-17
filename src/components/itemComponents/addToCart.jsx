import CartIcon from "../icons/CartIcon";
import StyledBtn from "../styles/Button.styled";

const AddToCart = ({ className, onClick = null }) => {
  return (
    <StyledBtn className={className} onClick={onClick}>
      <CartIcon /> Add to Cart
    </StyledBtn>
  );
};

export default AddToCart;
