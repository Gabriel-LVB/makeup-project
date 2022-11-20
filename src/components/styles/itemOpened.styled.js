import styled from "styled-components";
import StyledItem from "./Item.styled";

const StyledItemOpened = styled(StyledItem)`
  width: 95%;
  margin: 0 auto;
  padding: 20px 15px;
  grid-template-areas:
    "img img"
    "name name"
    "price price"
    "rating sold"
    "colors colors"
    "detail detail"
    "btns btns";
  color: var(--text-color-1);
  background: var(--bg-front);

  @media (min-width: 1050px) {
    padding: 5%;
  }

  .item {
    &__img {
      width: 35%;
      grid-area: img;
      cursor: initial;

      &:hover {
        transform: scale(1);
      }
    }
    &__name {
      grid-area: name;
      font-size: 1.5rem;
      text-align: left;
      cursor: initial;
      justify-self: start;
      &:hover {
        text-decoration: none;
      }
    }
    &__price {
      grid-area: price;
      justify-self: start;
      font-size: 1.8rem;
    }
    &__rating {
      grid-area: rating;
      width: max-content;
      justify-self: start;
      display: flex;
      gap: 10px;
      &__number {
        font-size: 1.2rem;
      }
    }
    &__sold {
      grid-area: sold;
      justify-self: end;
    }
    &__colors {
      &__container {
        grid-area: colors;
        justify-self: start;
        margin: 15px 0;

        .title {
          margin-bottom: 10px;
        }
      }
    }
    &__details {
      grid-area: detail;
      hr {
        margin: 20px 30px;
      }
      &__header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .title {
        font-size: 1.3rem;
        margin: 10px 0 0 0;
        width: fit-content;
      }
      &__since {
        color: var(--text-color-2);
        font-weight: 600;
        width: fit-content;
      }
      table {
        width: max(100%, 500px);
        max-width: 100%;
      }
      .table__row {
        text-transform: capitalize;
        background-color: var(--bg-back);
        * {
          padding: 6px;
        }
      }
    }
    &__btns {
      grid-area: btns;
      display: flex;
      gap: 15px;
      margin-top: 15px;
    }
  }
`;

export default StyledItemOpened;
