import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ bg }) => `var(--${bg})`};
  color: ${({ color }) => `var(--${color})`};
  width: ${({ width }) => (width ? `${width}` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "50px")};
  border: 0;
  border-radius: ${({ rounded }) => (rounded ? `${rounded}` : "24px")};
  &:hover {
    background-color: ${({ hvrBg }) => `${hvrBg}`};
    color: ${({ hvrColor }) => `var(--${hvrColor})`};
  }
  &:active {
    background-color: ${({ atvBg }) => `${atvBg}`};
    color: ${({ atvColor }) => `var(--${atvColor})`};
  }
  @media (max-width: 500px) {
    height: 40px;
    margin-top: 15px;
  }
`;
