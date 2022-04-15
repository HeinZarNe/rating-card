import Container from "./Container";
import styled from "styled-components";

export const CardContainer = styled(Container)`
  height: 380px;
  width: 380px;
  border-radius: 24px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 25px;
  @media (max-width: 500px) {
    width: 257px;
    height: 327px;
  }
`;
