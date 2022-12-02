import styled from "styled-components";

const StyledPagination = styled.ul`
  display: flex;
  width: fit-content;
  margin: auto;
  gap: 1px;
  width: 100%;
  justify-content: center;

  .pagination__item {
    list-style-type: none;
    padding: 5px 8px;
    border: 1px dotted var(--text-color-3);
    border-bottom: 2px solid var(--text-color-1);
    cursor: pointer;
    border-radius: 10px;
    font-size: 0.7rem;
    transition: all 0.2s ease-out;
    color: var(--text-color-1);

    &:hover,
    &.current {
      background-color: var(--text-color-1);
      color: var(--bg-front);
    }

    &.dots {
      border: none;
      cursor: default;

      &:hover {
        background-color: var(--bg-front);
        color: var(--text-color-1);
      }
    }
  }
  @media (min-width: 800px) {
    .pagination__item {
      font-size: 1.2rem;
    }
  }
`;

export default StyledPagination;
