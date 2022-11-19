import styled from "styled-components";

const StyledColor = styled.li`
  max-width: 95%;
  display: flex;
  list-style-type: none;
  &::before {
    content: "";
    background-color: ${(props) => props.color};
    height: ${(props) => props.size};
    min-width: ${(props) => props.size};
    border: 2px solid black;
    border-radius: 100%;
    margin: 0 5px;
    display: inline-block;
  }
`;

const Color = ({
  color,
  showName,
  onClick = () => {},
  className = "item__colors__color",
  size = null,
}) => {
  const printName = showName && !!color.colour_name;
  return (
    <StyledColor
      onClick={(e) => onClick(e, color)}
      className={className}
      size={size ? size : printName ? "22px" : "30px"}
      color={color.hex_value}
    >
      {printName && color.colour_name}
    </StyledColor>
  );
};

export default Color;
