import styled from "styled-components";

const StyledPagination = styled.ul`
  display: flex;
  width: fit-content;
  margin: auto;
  gap: 1px;

  .pagination__item {
    list-style-type: none;
    padding: 5px 8px;
    border: 1px solid #cc71ca;
    cursor: pointer;
    border-radius: 10px;
    font-size: 0.9rem;

    &:hover,
    &.current {
      background-color: #cc71ca;
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
`;

export default StyledPagination;
