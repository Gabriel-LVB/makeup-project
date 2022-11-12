import styled from "styled-components";

const StyledColor = styled.li`
  content: "";
  background-color: ${(props) => props.color};
  height: 40px;
  width: 40px;
  border: 2px solid black;
  border-radius: 100%;
  margin: 0 5px;
  display: inline-block;
`;

const Color = ({ color }) => {
  return <StyledColor color={color} />;
};

export default Color;
