import styled from "styled-components";

const StyledFooter = styled.footer`
  border-radius: 30px;
  border: 1px dotted var(--text-color-1);
  border-top: 3px solid var(--text-color-2);
  background-color: var(--bg-front);
  text-align: center;
  padding: 20px;
  p {
    font-size: 1rem;
    color: var(--text-color-3);
  }
  a {
    color: var(--text-color-2);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Made by{" "}
        <a
          href="https://github.com/Gabriel-LVB"
          target="_blank"
          rel="noreferrer"
        >
          Gabriel-lvb
        </a>
      </p>
      <p>
        Based on{" "}
        <a
          href="https://makeup-api.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          MakeUp-API
        </a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
