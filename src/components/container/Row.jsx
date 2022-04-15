import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${({ alignItems }) => (alignItems ? `${alignItems}` : "start")};
  flex-direction: ${({ direction }) => `${direction}`};
  margin: 2px 0;
  width: 100%;
`;
