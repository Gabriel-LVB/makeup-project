import styled from "styled-components";

const StyledBtn = styled.button`
  border: none;
  background-color: var(--bg-front);
  color: var(--text-color-1);
  border-radius: 10px;
  padding: 15px;
  border-radius: 20px;
  border: 1px dotted var(--text-color-1);
  border-right: 2px solid var(--text-color-1);
  border-left: 2px solid var(--text-color-1);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s ease-out;
  &:hover {
    background-color: var(--text-color-1);
    color: var(--bg-front);
    i {
      color: var(--bg-front);
    }
  }
  &:active {
    transform: scale(0.8);
  }
`;

export default StyledBtn;
