import styled from "styled-components";

const StyledSideNav = styled.nav`
  &.open {
    .side-nav {
      &__bg {
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }

      &__container {
        left: 0;
        width: max-content;
        transform: translateX(0);
      }

      &__btn {
        transform: translateX(80vw);
      }
    }
  }
  .side-nav {
    &__btn {
      position: fixed;
      top: 1.5rem;
      left: 1rem;
      font-size: 1.5rem;
      padding: 0.4rem 0.8rem;
      background-color: black;
      color: white;
      border: 0;
      border-radius: 10px;
      z-index: 1;
      transition: all 0.5s ease-out;
      cursor: pointer;
    }

    &__bg {
      background-color: rgba(0, 0, 0, 0);
      transition: all 0.5s ease-out;
    }

    &__container {
      background-color: #171717;
      color: white;
      padding: 10px;
      overflow: auto;
      position: fixed;
      top: 0;
      bottom: 0;
      transition: all 0.5s ease-out;
      transform: translateX(-100%);

      &::-webkit-scrollbar {
        display: none;
      }

      h1 {
        text-align: center;
        margin-bottom: 1rem;
        margin-top: 2rem;
        font-size: 2rem;
      }
    }
  }
`;

export default StyledSideNav;
