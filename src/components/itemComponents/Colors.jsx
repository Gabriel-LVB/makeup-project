import styled from "styled-components";
import Color from "./Color";

const StyledColors = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => (props.showAll ? "10px" : "5px")};
  justify-content: ${(props) => (props.showAll ? "" : "center")};
`;

const Colors = ({ colors, showAll = false }) => {
  return (
    <div className="item__colors__container">
      {showAll && !!colors[0] && (
        <h3 className="item__colors title">Colors: </h3>
      )}
      <StyledColors className="item__colors" showAll={showAll}>
        {colors &&
          (!showAll ? colors.slice(0, 10) : colors).map((color, i) => {
            return (
              <Color
                key={color.hex_value + colors.length + i}
                color={color}
                showName={showAll}
              />
            );
          })}
      </StyledColors>
    </div>
  );
};

export default Colors;
