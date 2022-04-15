import styled from "styled-components";

export const Circle = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: ${({ bg }) => `var(--${bg})`};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: ${({ color }) => `var(--${color})`};
  margin: ${({ margin }) => margin && `${margin.y}px ${margin.x}px`};
  &:hover {
    background-color: ${({ hvrBg }) => `var(--${hvrBg})`};
    color: ${({ hvrColor }) => `var(--${hvrColor})`};
  }
  &:active {
    background-color: ${({ atvBg }) => `var(--${atvBg})`};
    color: ${({ atvColor }) => `var(--${atvColor})`};
  }
`;
