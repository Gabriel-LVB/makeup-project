import StyledBtn from "../styles/Button.styled";
import CartItem from "../../types/cartItem";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";

type OnClick = (() => void) | null;
type SetItemToEdit = ((item: CartItem | null) => AnyAction) | null;

interface EditBtnProps {
  onClick: OnClick;
  setItemToEdit: SetItemToEdit;
  item: CartItem | null;
}

function EditBtn({
  onClick = null,
  setItemToEdit = null,
  item = null,
}: EditBtnProps) {
  const dispatch = useDispatch();
  return (
    <StyledBtn
      onClick={() => {
        (onClick && onClick()) ||
          (setItemToEdit && dispatch(setItemToEdit(item)));
      }}
    >
      <i className="fa-solid fa-pen"></i>
    </StyledBtn>
  );
}

export default EditBtn;
