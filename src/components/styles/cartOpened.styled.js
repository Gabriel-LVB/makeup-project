import styled from "styled-components";
import StyledItemOpened from "./itemOpened.styled";

const StyledCart = styled(StyledItemOpened)`
  display: block;
  padding: 5%;
  color: var(--text-color-1);
  background: var(--bg-front);

  .cart__header {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }

  .cart__title {
    color: var(--text-color-1);
    margin-bottom: 10px;
  }

  .cart__total .cart__title {
    padding-left: 20px;
  }

  hr {
    border: none;
    border-top: 2px dashed var(--text-color-3);
    width: 90%;
    margin: 10px auto;
  }

  .no_products {
    margin: 2rem auto;
    text-align: center;
    color: gray;
    i {
      font-size: 8rem;
      color: var(--text-color-3);
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

  .order {
    margin: 3px 20px;
    padding: 3px 0;
    color: var(--text-color-1);
    display: flex;
    justify-content: space-between;
    border-bottom: 2px dotted var(--text-color-3);

    &.total {
      font-size: 1.5rem;
      border: none;
    }
  }
  .continue__container {
    text-align: center;
    margin-top: 1rem;
  }
  .continue__bottom {
    font-size: 1.5rem;
    padding: 20px 30px;
  }
`;

export default StyledCart;
