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
    border: 1px dotted #909090;
    border-bottom: 2px solid #101010;
    cursor: pointer;
    border-radius: 10px;
    font-size: 0.9rem;

    &:hover,
    &.current {
      background-color: #101010;
      color: white;
    }

    &.dots {
      border: none;
      cursor: default;

      &:hover {
        background-color: white;
        color: black;
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
