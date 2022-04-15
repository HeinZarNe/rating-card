import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => `var(--${props.backgroundColor})`};
  color: ${(props) => `var(--${props.text})`};
  height: 100vh;
`;

export default Container;
