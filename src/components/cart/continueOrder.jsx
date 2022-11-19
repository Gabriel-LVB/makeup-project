import StyledBtn from "../styles/Button.styled";

const ContinueOrder = ({ className = "continue" }) => {
  return (
    <StyledBtn
      className={className}
      onClick={() => {
        document.querySelector(".congrats").classList.add("open");
      }}
    >
      <i className="fa-solid fa-truck"></i> Continue
    </StyledBtn>
  );
};

export default ContinueOrder;
