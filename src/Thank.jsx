import { useSelector } from "react-redux";
import { CardContainer } from "./components/container/CardContainer";
import Container from "./components/container/Container";
import { Row } from "./components/container/Row";
import { ThankYou } from "./components/utils/ThankYou";
import { Text } from "./components/utils/Text";
import styled from "styled-components";

const Div = styled.div`
  background-color: #303c4b;
  padding: 5px 20px;
  border-radius: 24px;
  font-size: 16px;
  color: var(--Orange);
  @media (max-width: 500px) {
    font-size: 13px;
  }
`;

export const Thank = () => {
  const state = useSelector((state) => state);

  return (
    <Container backgroundColor="VeryDarkBlue" text="White">
      <CardContainer backgroundColor="DarkBlue">
        <Row alignItems="center" direction="column">
          <ThankYou />
        </Row>
        <Row direction="column" alignItems="center">
          <Div>You selected {state} out of 5</Div>
        </Row>
        <Row direction="column" alignItems="center">
          <Text size="25" color="White" bold="600">
            Thanks You!
          </Text>
          <Text color="LightGrey" size="14" align="center">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </Text>
        </Row>
      </CardContainer>
    </Container>
  );
};
