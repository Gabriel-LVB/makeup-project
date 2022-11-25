import styled from "styled-components";

const StyledCartItem = styled.li`
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas:
    "img name price"
    "img brand price"
    "img qnt price"
    "img color price";
  padding: 10px 25px 10px 10px;

  * {
    /* border: 1px dotted red; */
  }
  img {
    grid-area: img;
    width: 90%;
    align-self: center;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
  .name {
    width: fit-content;
    grid-area: name;
    font-size: 1.3rem;
    text-transform: capitalize;
    cursor: pointer;
    &:hover {
      text-decoration: underline var(--primary);
    }
  }
  .price_btns {
    grid-area: price;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .total {
    text-align: end;
  }

  .each {
    text-align: end;
  }
  .brand {
    grid-area: brand;
    font-size: 1.2rem;
    color: var(--text-color-2);
    text-transform: capitalize;
  }
  .quantity {
    grid-area: qnt;
    color: var(--text-color-2);
    text-transform: capitalize;
  }
  .color {
    grid-area: color;
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--text-color-2);
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .btns {
    grid-area: btns;
    text-align: end;
    align-self: center;
    display: flex;
    justify-content: end;
    gap: 5px;
    flex-wrap: wrap;
    button {
      padding: 10px 13px;
      border: 1px solid var(--text-color-1);
    }
  }
`;

export default StyledCartItem;
