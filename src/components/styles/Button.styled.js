import styled from "styled-components";

const StyledBtn = styled.button`
  border: none;
  background-color: white;
  color: black;
  border-radius: 10px;
  padding: 15px;
  border-radius: 20px;
  border: 1px dotted black;
  border-right: 2px solid black;
  border-left: 2px solid black;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s ease-out;
  &:hover {
    background-color: black;
    color: white;
  }
  &:active {
    transform: scale(0.8);
  }
`;

export default StyledBtn;
