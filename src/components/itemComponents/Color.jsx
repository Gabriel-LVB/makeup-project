import styled from "styled-components";

const StyledColor = styled.li`
  content: "";
  list-style-type: none;
  height: ${(props) => props.size};
  min-width: ${(props) => props.size};
  border: 2px solid var(--text-color-1);
  border-radius: 100%;
  margin: 0;
  display: inline-block;
`;

const Color = ({
  color,
  showName,
  onClick = () => {},
  className = "item__colors__color",
}) => {
  const printName = showName && !!color.colour_name;
  return (
    <>
      <StyledColor
        style={{ background: `${color.hex_value}` }}
        onClick={(e) => onClick(e, color)}
        color={color.hex_value}
        className={className}
        size={"45px"}
        name={color.colour_name}
      ></StyledColor>
      {printName && <p>{color.colour_name}</p>}
    </>
  );
};

export default Color;
