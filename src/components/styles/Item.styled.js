import styled from "styled-components";

export default styled.div`
  width: 320px;
  margin: 20px auto;
  display: grid;
  grid-template-areas:
    "img img"
    "name name"
    "rating price"
    "colors colors";
  justify-items: center;
  padding: 15px;
  gap: 10px;
  border-radius: 50px;
  box-shadow: 1px 1px 5px black;

  * {
  }

  .item {
    &__img {
      grid-area: img;
    }
    &__name {
      grid-area: name;
      font-size: 1.3rem;
      border-top: 1px solid black;
      padding-top: 10px;
      text-align: center;
      text-transform: capitalize;
    }
    &__price {
      grid-area: price;
      font-size: 1.6rem;
      /* justify-self: end; */
    }
    &__rating {
      grid-area: rating;
      font-size: 1.3rem;

      /* justify-self: start; */
      color: #cc71ca;
    }
    &__colors {
      grid-area: colors;
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
  }
`;
