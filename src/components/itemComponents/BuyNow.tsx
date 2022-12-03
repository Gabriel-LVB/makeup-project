import StyledBtn from "../styles/Button.styled";

interface BuyNowProps {
  onClick(): void;
  className?: string;
}

function BuyNow({ onClick, className }: BuyNowProps) {
  return (
    <StyledBtn className={className} onClick={() => onClick()}>
      <i className="fa-solid fa-bolt"></i> Buy Now
    </StyledBtn>
  );
}

export default BuyNow;
