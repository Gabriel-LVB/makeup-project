import styled from "styled-components";
import StyledItemOpened from "./itemOpened.styled";

const StyledCart = styled(StyledItemOpened)`
  display: block;
  .no_products {
    margin: 2rem auto;
    text-align: center;
    color: gray;
    i {
      font-size: 8rem;
      color: lightgray;
    }
    h2 {
      text-align: center;
      font-size: 2rem;
      margin-top: 1rem;
    }
    button {
      margin-top: 1rem;
      font-size: 1.5rem;
    }
  }
`;

export default StyledCart;
