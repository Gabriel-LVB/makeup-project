import styled from "styled-components";

const StyledSideNav = styled.nav`
  flex: 0 0 30%;
  @media (max-width: 1050px) {
    &.open {
      .side-nav {
        &__bg {
          background-color: var(--semi-transparent);
          position: fixed;
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
        background-color: var(--text-color-1);
        color: var(--bg-front);
        border: 0;
        border-radius: 10px;
        z-index: 1;
        transition: all 0.5s ease-out;
        cursor: pointer;
        display: initial;
      }

      &__bg {
        background-color: var(--transparent);
        transition: all 0.5s ease-out;
      }

      &__container {
        background-color: var(--bg-front);
        color: var(--text-color-1);
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
      }
    }
  }
  h1 {
    text-align: center;
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-size: 2rem;
    color: var(--text-color-1);
  }
  @media (min-width: 1050px) {
    .side-nav__btn {
      display: none;
    }

    border: 1px dotted var(--text-color-1);
    border-right: 3px solid var(--text-color-2);
    border-left: 3px solid var(--text-color-2);
  }
`;

export default StyledSideNav;
