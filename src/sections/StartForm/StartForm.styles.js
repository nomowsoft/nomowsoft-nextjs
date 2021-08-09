import styled, { css } from "styled-components";
import { Button } from "components/atoms";

export const StartFormContainer = styled.div`
  background: ${({ theme }) => theme.colors.linear};
  padding: 20px 24px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.muted};
  margin-top: 50px;
  box-shadow: ${({ theme }) => `0 1px 10px 0 ${theme.colors.shadow}`};
`;

export const StartFormBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;
export const TextInput = styled.input`
  background: transparent;
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.muted};
  padding: 8px 16px;
  outline: none;
  margin-top: 7px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.text_100};
  width: 100%;
`;
export const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text_100};
  /* margin-bottom: 8px; */
  display: block;
  ${({ col }) =>
    col &&
    css`
      grid-column-end: span ${({ col }) => col};
    `}
`;
export const FormFoot = styled.div`
  width: calc(100% + 48px);
  margin: 0 -24px;
  padding: 20px 24px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.muted};
  grid-column-end: span 2;
  display: flex;
  justify-content: flex-end;
`;
export const SubmitBtn = styled(Button)`
  background: ${({ theme }) => theme?.colors.primary};
  color: #fff;
  /* width: calc(100% + 48px); */
  /* margin: 10px -24px 0;
  padding: 20px 24px; */
`;
