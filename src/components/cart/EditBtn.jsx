import StyledBtn from "../styles/Button.styled";

const EditBtn = ({ onClick = null, setItemToEdit = null, item }) => {
  return (
    <StyledBtn
      onClick={() => {
        (onClick && onClick()) || (setItemToEdit && setItemToEdit(item));
      }}
    >
      <i className="fa-solid fa-pen"></i>
    </StyledBtn>
  );
};

export default EditBtn;
