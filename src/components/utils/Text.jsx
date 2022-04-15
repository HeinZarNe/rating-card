import styled from "styled-components";

export const Text = styled.span`
  font-size: ${({ size }) => `${size}px`};
  color: ${({ color }) => `var(--${color})`};
  margin: 5px 0;
  letter-spacing: ${({ space }) => `${space}px`};
  font-weight: ${({ bold }) => `${bold}`};
  text-align: ${({ align }) => align && `${align}`};
`;
