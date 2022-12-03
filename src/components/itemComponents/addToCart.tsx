import CartIcon from "../icons/CartIcon";
import StyledBtn from "../styles/Button.styled";

interface AddToCartProps {
  className?: string;
  onClick: () => void;
}

function AddToCart({ className, onClick }: AddToCartProps) {
  return (
    <StyledBtn className={className} onClick={onClick}>
      <CartIcon /> Add to Cart
    </StyledBtn>
  );
}

export default AddToCart;
