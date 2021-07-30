import styled, { css } from "styled-components";

const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background: ${({ theme }) => theme.colors.muted};
  border-radius: 6px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    background: #ececec;
  }

  > svg {
    stroke: #bababa;
    width: 100%;
    height: 100%;
  }

  ${({ active }) =>
    active &&
    css`
      background: #ececec;
      > svg {
        stroke: #000;
      }
    `}

  ${({ small }) =>
    small &&
    css`
      height: 25px;
      width: 25px;
    `}
  
  ${({ medium }) =>
    medium &&
    css`
      height: 30px;
      width: 30px;
    `}
  
  ${({ circle }) =>
    circle &&
    css`
      height: 35px;
      width: 35px;
      padding: 8px;
      border-radius: 50%;
    `}
`;

export default IconButton;
