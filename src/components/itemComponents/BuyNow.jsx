import StyledBtn from "../styles/Button.styled";

const BuyNow = ({ onClick, className }) => {
  return (
    <StyledBtn className={className} onClick={() => onClick()}>
      <i className="fa-solid fa-bolt"></i> Buy Now
    </StyledBtn>
  );
};

export default BuyNow;
