import styled from "styled-components";

const StyledItems = styled.section`
  border: 1px dotted black;
  border-right: 3px solid #505050;
  border-left: 3px solid #505050;
  border-radius: 50px;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  gap: 20px;
  .title {
    width: 100%;
    font-size: 2rem;
    text-transform: capitalize;
    padding-left: 20px;
  }
  .subtitle {
    width: 100%;
    font-size: 1.2rem;
    margin-top: -1rem;
    color: #474747;
  }
`;

export default StyledItems;
