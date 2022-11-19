import styled from "styled-components";

const StyledCartModal = styled.div`
  z-index: 1;
  &.open {
    .bg {
      top: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s ease-out;
    }
    .content {
      bottom: 0;
      transition: all 0.6s linear;
    }
  }

  .bg {
    background-color: rgba(0, 0, 0, 0);
    position: fixed;
    left: 0;
    right: 0;
    top: 100%;
    bottom: -100%;
    transition: all 0.2s ease-out;
  }
  .content {
    background-color: white;
    position: fixed;
    bottom: -100%;
    left: -5px;
    right: -5px;
    padding: 25px;
    border: 2px solid #505050;
    border-radius: 50px 50px 0 0;
    transition: all 0.6s linear;
    .price h3 {
      text-align: right;
    }
  }

  .brand {
    color: #202020;
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
      gap: 7px;
      align-items: center;
      justify-content: start;

      li {
        &::before {
          width: 40px;
          height: 40px;
          cursor: pointer;
          transition: all 0.2s ease-out;
        }
        &.selected::before {
          border-bottom: 5px solid black;
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
        width: 3rem;
        font-size: 1.2rem;
        font-weight: 600;
      }
    }
  }
`;

export default StyledCartModal;
