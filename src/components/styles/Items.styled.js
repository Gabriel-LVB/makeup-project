import styled from "styled-components";

const StyledItems = styled.section`
  border: 1px dotted var(--text-color-1);
  border-right: 3px solid var(--text-color-2);
  border-left: 3px solid var(--text-color-2);
  border-radius: 50px;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  gap: 20px;
  background: var(--bg-front);
  .title {
    width: 100%;
    font-size: 2rem;
    text-transform: capitalize;
    padding-left: 20px;
    color: var(--text-color-1);
  }
  .subtitle {
    padding-left: 20px;

    width: 100%;
    font-size: 1.2rem;
    margin-top: -1rem;
    color: var(--text-color-2);
  }
`;

export default StyledItems;
