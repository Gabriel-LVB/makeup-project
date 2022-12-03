import StyledBtn from "../styles/Button.styled";

const ChooseNewProducts = ({ onClick }: { onClick: () => void }) => {
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
