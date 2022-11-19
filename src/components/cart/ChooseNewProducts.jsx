import StyledBtn from "../styles/Button.styled";

const ChooseNewProducts = ({ onClick }) => {
  return (
    <StyledBtn
      onClick={() => {
        onClick();
      }}
    >
      Choose New Products
    </StyledBtn>
  );
};

export default ChooseNewProducts;
