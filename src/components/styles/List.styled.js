import styled from "styled-components";

export default styled.div`
  .side-nav__list {
    padding: 10px 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    &.open {
      gap: 5px;
      .side-nav__list__item {
        transform: translateY(0);
        display: block;
        height: 2.4rem;
        padding: 2px 20px;

        &:hover {
          padding-left: 40px;
        }
      }
    }

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 30px;
      cursor: pointer;
      text-transform: uppercase;
      font-size: 1rem;
    }

    &__toggler {
      background-color: transparent;
      color: white;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      transform: rotate(-90deg);
      transition: all 0.3s linear;

      &.open {
        transform: rotate(0);
      }
    }

    &__item {
      list-style-type: none;
      border-radius: 10px;
      cursor: pointer;
      background-color: #363636;
      transition: all 0.5s ease-in-out, color 0s linear;
      font-size: 1.5rem;
      transform: translateY(-1000px);
      height: 0;
      text-transform: Capitalize;

      &:active {
        color: #cc71ca;
      }
    }
  }
`;
