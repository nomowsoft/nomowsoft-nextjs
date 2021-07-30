import styled, { css } from "styled-components";

const Button = (props) => {
  const { title, startIcon, endIcon, ...rest } = props;
  return (
    <StyledButton {...rest}>
      {startIcon && startIcon}
      <Title>{title}</Title>
      {endIcon && endIcon}
    </StyledButton>
  );
};

const Title = styled.span`
  margin: 0 7px;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  font-weight: 400;
  text-align: center;
  justify-content: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 7px;
  cursor: pointer;
  text-transform: capitalize;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  /* light btn default */
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
  outline: none;

  &:hover {
    color: #212529;
    background-color: #e2e6ea;
    border-color: #dae0e5;
  }

  svg {
    width: 17px;
    height: 17px;
  }

  ${({ btnStyle }) =>
    btnStyle === "success" &&
    css`
      background-color: #217371;
      border-color: #217371;
      color: #fff;

      &:hover {
        color: #fff;
        background-color: #2c7a78;
        border-color: #2c7a78;
      }
      &:focus {
        box-shadow: 0 0 0 2px #2c7a7840;
      }
    `}

  ${({ btnStyle }) =>
    btnStyle === "blue" &&
    css`
      background-color: #007bff;
      border-color: #007bff;
      color: #fff;

      &:hover {
        color: #fff;
        background-color: #0069d9;
        border-color: #0062cc;
      }
      &:focus {
        box-shadow: 0 0 0 2px rgb(0 123 255 / 50%);
      }
    `}

  ${({ large }) =>
    large &&
    css`
      padding: 10px 15px;
      font-size: 18px;
    `}

  ${({ small }) =>
    small &&
    css`
      padding: 0.25rem 0.5rem;
      font-size: 14px;
    `}
  
  ${({ block }) =>
    block &&
    css`
      width: 100%;
    `}

  ${({ black }) =>
    black &&
    css`
      color: #fff;
      background-color: #343a40;
      border-color: #343a40;

      &:hover {
        color: #fff;
        border-color: #1d2124;
      }

      &:focus {
        box-shadow: 0 0 0 0.2rem rgb(52 58 64 / 50%);
      }
    `}
`;

export default Button;
