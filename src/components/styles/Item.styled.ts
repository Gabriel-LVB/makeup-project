import styled from "styled-components";

export default styled.div`
  width: 320px;
  margin: 20px auto;
  display: grid;
  grid-template-rows: minmax(0px, 60%) auto auto auto;
  grid-template-areas:
    "img img"
    "name name"
    "rating price"
    "colors colors";
  justify-items: center;
  gap: 10px;
  padding: 15px;
  border-radius: 50px;
  border: 1px dotted var(--text-color-1);
  border-right: 3px solid var(--text-color-2);
  border-left: 3px solid var(--text-color-2);
  color: var(--text-color-1);
  max-height: 460px;

  .item {
    &__img {
      max-width: 90%;
      max-height: 100%;
      object-fit: contain;
      padding: 10px;
      grid-area: img;
      border-radius: 30px;
      cursor: pointer;
      transition: all 0.3s ease-out;

      &:hover {
        transform: scale(1.1);
      }
    }
    &__name {
      grid-area: name;
      font-size: 1.3rem;
      text-align: center;
      text-transform: capitalize;
      cursor: pointer;

      &:hover {
        text-decoration: underline var(--primary);
      }
    }
    &__price {
      grid-area: price;
      font-size: 1.5rem;
      /* justify-self: end; */
    }
    &__rating__stars {
      grid-area: rating;
      font-size: 1.2rem;
      i {
        color: var(--primary);
      }
    }
    &__colors {
      &__container {
        grid-area: colors;
      }
    }
  }
`;
