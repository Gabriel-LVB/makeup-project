import styled from "styled-components";
import Color from "./Color";

const StyledColors = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: ${(props) => (props.showNames ? "" : "center")};
`;

const Colors = ({ colors, showNames = false }) => {
  return (
    <div className="item__colors__container">
      {showNames && !!colors[0] && (
        <h3 className="item__colors title">Colors: </h3>
      )}
      <StyledColors className="item__colors" showNames={showNames}>
        {colors &&
          (!showNames ? colors.slice(0, 10) : colors).map((color, i) => {
            return (
              <Color
                key={color.hex_value + colors.length + i}
                color={color}
                showName={showNames}
              />
            );
          })}
      </StyledColors>
    </div>
  );
};

export default Colors;