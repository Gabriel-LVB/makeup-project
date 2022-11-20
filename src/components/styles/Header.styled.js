import styled from "styled-components";

const Header = styled.header`
  background-color: var(--bg-back);
  padding: 40px 15px;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;

    &__name {
      font-family: "Blackout";
      color: var(--primary);
      text-shadow: 0.5px 2px 0px var(--text-color-1);
      font-size: 3.5rem;
      cursor: pointer;
      user-select: none;
    }
  }

  .form_cart {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .search {
    display: flex;
    height: 3.5rem;
    min-width: 400px;

    [placeholder] {
      width: 85%;
      text-overflow: ellipsis;
    }

    &__input {
      border: 1px solid var(--text-color-1);
      background-color: var(--bg-front);
      border-right: none;
      border-radius: 20px 0px 0px 20px;
      padding-left: 1rem;
      font-size: 1rem;
      min-width: 500px;

      &:focus {
        outline: 1px solid var(--primary);
      }
    }
    &__btn {
      border-radius: 0px 20px 20px 0px;
      cursor: pointer;
    }
  }
  .search__btn,
  .cart {
    padding: 0 15px;
    border: 1px solid var(--text-color-1);
  }
  .cart {
    border-radius: 20px 0 0 20px;
  }
  .cart__container {
    display: flex;
  }

  .cart-infos {
    padding: 5px 15px;
    font-weight: 600;
    border-radius: 0 20px 20px 0;
    border: 1px solid var(--text-color-1);
    background-color: var(--bg-front);
    color: var(--text-color-2);
    border-left: none;
  }

  .theme-toggler {
    border: 1px solid var(--text-color-1);
  }

  @media (max-width: 1050px) {
    .cart-infos {
      display: none;
    }
    .search {
      min-width: 300px;
    }
    .cart {
      border-radius: 20px;
    }
    .form_cart {
      gap: 10px;
    }
    .search__input {
      min-width: 0;
    }
  }
`;

export default Header;
