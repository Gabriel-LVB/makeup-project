import StyledBtn from "../styles/Button.styled";

interface ThemeTogglerProps {
  theme: string;
  onClick(): void;
}

function ThemeTogglerBtn({ theme, onClick }: ThemeTogglerProps) {
  return (
    <StyledBtn className="theme-toggler" onClick={() => onClick()}>
      <i className={`fa-solid fa-${theme === "light" ? "moon" : "sun"}`}></i>
    </StyledBtn>
  );
}

export default ThemeTogglerBtn;
