import StyledBtn from "../styles/Button.styled";

const DeleteBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <StyledBtn
      onClick={() => {
        onClick();
      }}
    >
      <i className="fa-solid fa-trash"></i>
    </StyledBtn>
  );
};

export default DeleteBtn;
