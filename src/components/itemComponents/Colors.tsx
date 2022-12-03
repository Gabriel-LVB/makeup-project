import styled from "styled-components";
import Color from "./Color";
import { ProductColors } from "../../types/item";

const StyledColors = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props: { showAll: boolean }) => (props.showAll ? "10px" : "5px")};
  justify-content: ${(props) => (props.showAll ? "" : "center")};
`;

interface ColorsProps {
  colors: ProductColors[];
  showAll?: boolean;
}

function Colors({ colors, showAll = false }: ColorsProps) {
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
}

export default Colors;
