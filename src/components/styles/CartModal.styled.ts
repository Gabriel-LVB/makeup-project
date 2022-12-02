import styled from "styled-components";

const StyledCartModal = styled.div`
  z-index: 1;
  &.open {
    .bg {
      top: 0;
      bottom: 0;
      background-color: var(--semi-transparent);
      transition: all 0.2s ease-out;
    }
    .content {
      bottom: 0;
      transition: all 0.4s linear;
    }
  }

  .bg {
    background-color: var(--transparent);
    position: fixed;
    left: 0;
    right: 0;
    top: 150%;
    bottom: -150%;
    transition: all 0.2s ease-out;
  }
  .content {
    background-color: var(--bg-front);
    position: fixed;
    bottom: -100%;
    left: -5px;
    right: -5px;
    padding: 25px;
    border: 2px solid var(--text-color-2);
    border-radius: 50px 50px 0 0;
    transition: all 0.6s linear;
    .price h3 {
      text-align: right;
    }
  }

  .brand {
    color: var(--text-color-1);
    text-transform: capitalize;
    font-weight: 600;
  }

  .price {
    float: right;
    margin-right: 10px;
    h2 {
      float: right;
    }
  }

  .colors {
    text-transform: capitalize;
    margin-top: 15px;

    &__title {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      font-weight: 600;
      &__title {
        font-size: 1.4rem;
      }
      .modal__advice {
        color: brown;
      }
    }

    &__content {
      display: flex;
      padding: 10px 0;
      flex-wrap: wrap;
      gap: 15px;
      align-items: center;
      justify-content: start;

      li {
        cursor: pointer;
        transition: all 0.2s ease-out;

        &.selected {
          box-shadow: 0px 0px 2px 2px var(--text-color-1);
          transform: scale(1.2);
        }
      }
    }
  }
  .bottom {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    .quantity {
      font-size: 1.3rem;
      font-weight: 600;
      input {
        width: 4rem;
        font-size: 1.2rem;
        font-weight: 600;
        background-color: var(--bg-back);
        padding: 3px 0 3px 5px;
        border: none;
        color: var(--text-color-1);
        &::-webkit-inner-spin-button {
          padding: 5px 5px;
        }
      }
    }
  }
  @media (min-width: 1050px) {
    .content {
      width: fit-content;
      height: fit-content;
      min-width: 500px;
      max-width: 60%;
      border-radius: 50px;
      margin: auto;
    }
    &.open {
      .content {
        top: 0;
        margin: auto;
      }
    }
  }
`;

export default StyledCartModal;
