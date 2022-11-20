import StyledBtn from "../styles/Button.styled";

const ThemeTogglerBtn = ({ theme, onClick }) => {
  return (
    <StyledBtn className="theme-toggler" onClick={() => onClick()}>
      <i className={`fa-solid fa-${theme === "light" ? "moon" : "sun"}`}></i>
    </StyledBtn>
  );
};

export default ThemeTogglerBtn;
