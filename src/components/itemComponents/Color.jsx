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
    <div
      style={
        printName
          ? {
              background: "var(--bg-back)",
              display: "flex",
              gap: "5px",
              padding: "5px 8px",
              borderRadius: "15px",
            }
          : null
      }
    >
      <StyledColor
        style={{ background: `${color.hex_value}` }}
        onClick={(e) => onClick(e, color)}
        color={color.hex_value}
        className={className}
        size={printName ? "25px" : "45px"}
        name={color.colour_name}
      ></StyledColor>
      {printName && <p>{color.colour_name}</p>}
    </div>
  );
};

export default Color;
