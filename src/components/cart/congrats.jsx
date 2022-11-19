import StyledCartModal from "../styles/CartModal.styled";
import styled from "styled-components";

const StyledCongrats = styled(StyledCartModal)`
  h1 {
    font-size: 1.65rem;
  }
  .bg {
    z-index: 1;
  }
  .content {
    z-index: 1;
  }
`;

const Congrats = ({ setCongratsOpen }) => {
  return (
    <StyledCongrats className="congrats">
      <div
        className="bg"
        onClick={(e) => {
          const parent = e.target.parentNode;
          parent.classList.remove("open");
        }}
      ></div>
      <div className="content">
        <h1>I am realy happy that you are enjoying this project :D</h1>
        <h2>Please check out my other projects and my Linkedin</h2>
      </div>
    </StyledCongrats>
  );
};

export default Congrats;
