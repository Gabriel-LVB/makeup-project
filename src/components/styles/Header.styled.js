import styled from "styled-components";

const Header = styled.header`
  background-color: #eeeeee;
  padding: 15px;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;

    &__name {
      font-family: "Blackout";
      color: #cc71ca;
      text-shadow: 0.5px 2px 0px black;
      font-size: 3.5rem;
      cursor: pointer;
      user-select: none;
    }
  }

  .form_cart {
    display: flex;
    justify-content: space-evenly;
  }

  .search {
    display: flex;
    height: 2rem;
    width: 80%;

    [placeholder] {
      width: 85%;
      text-overflow: ellipsis;
    }

    &__input {
      border-radius: 10px 0px 0px 10px;
      border: none;
      padding-left: 1rem;
      font-size: 1rem;
      width: 100%;

      &:focus {
        outline: 1px solid #cc71ca;
      }
    }
    &__btn {
      border-radius: 0px 10px 10px 0px;
      cursor: pointer;
    }
  }
  .search__btn,
  .cart {
    background-color: black;
    color: white;
    padding: 0 15px;
    border: none;
    &:focus {
      outline: 1px solid #cc71ca;
    }
  }
  .cart {
    border-radius: 10px;
    cursor: pointer;
  }
`;

export default Header;
