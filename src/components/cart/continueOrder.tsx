import StyledBtn from "../styles/Button.styled";

function ContinueOrder({ className }: { className?: string }) {
  return (
    <StyledBtn
      className={className || "continue"}
      onClick={() => {
        document.querySelector(".congrats")!.classList.add("open");
      }}
    >
      <i className="fa-solid fa-truck"></i> Continue
    </StyledBtn>
  );
}

export default ContinueOrder;
