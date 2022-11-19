import StyledBtn from "../styles/Button.styled";

const DeleteBtn = ({ onClick }) => {
  return (
    <StyledBtn
      onClick={() => {
        onClick();
      }}
    >
      <i className="fa-solid fa-trash"></i> Delete Item
    </StyledBtn>
  );
};

export default DeleteBtn;
