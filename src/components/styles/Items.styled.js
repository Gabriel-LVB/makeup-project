import styled from "styled-components";

const StyledItems = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  gap: 20px;
  .title {
    width: 100%;
    font-size: 1.6rem;
    text-transform: capitalize;
  }
  .subtitle {
    width: 100%;
    font-size: 1.2rem;
    margin-top: -1rem;
    color: #474747;
  }
`;

export default StyledItems;
