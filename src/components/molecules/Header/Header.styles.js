import { Button } from "components/atoms";
import styled, { css } from "styled-components";
import { devices } from "styles/styles";
import { motion } from "framer-motion";

export const HeaderBox = styled(motion.header)`
  width: 100%;
  position: fixed;
  top: 0;
  transition: padding 0.1s ease-in, background 0.1s ease-in;
  background-color: ${({ scrolled }) => (scrolled ? "#fff" : "transparent")};
  box-shadow: ${({ theme, scrolled }) =>
    scrolled ? `0 2px 5px 0 ${theme.colors.gray_100}` : "unset"};
  z-index: 20;
  @media ${devices.xl} {
    box-shadow: ${({ theme, scrolled }) =>
      scrolled ? `0 2px 15px 0 ${theme.colors.gray_100}` : "unset"};
  }
  @media ${devices.xxxl} {
    box-shadow: ${({ theme, scrolled }) =>
      scrolled ? `0 2px 15px 0 ${theme.colors.gray_100}` : "unset"};
  }
`;

export const ElementBox = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1900px;
  margin: auto;
  padding: ${({ scrolled }) => (scrolled ? "5px 10px" : "10px")};
  @media ${devices.sm} {
    padding: ${({ scrolled }) => (scrolled ? "11px 20px" : "15px 20px")};
  }
  @media ${devices.md} {
    padding: ${({ scrolled }) => (scrolled ? "12px 20px" : "15px 20px")};
  }
  @media ${devices.lg} {
    padding: ${({ scrolled }) => (scrolled ? "12px 20px" : "17px 20px")};
  }
  @media ${devices.xl} {
    padding: ${({ scrolled }) => (scrolled ? "20px 25px" : "27px 25px")};
  }
  @media ${devices.xxxl} {
    padding: ${({ scrolled }) => (scrolled ? "20px 25px" : "30px 25px")};
  }
`;

export const HeaderBtn = styled(Button)`
  padding: 3px 5px;
  font-size: 9px;
  border-radius: 4px;
  margin-inline-start: 5px;
  & span {
    margin: 0;
  }
  @media ${devices.sm} {
    padding: 4px 7px;
    font-size: 9px;
    margin-inline-start: 20px;
  }
  @media ${devices.lg} {
    padding: 7px 14px;
    font-size: 12px;
    margin-inline-start: 100px;
  }
  @media ${devices.xl} {
    padding: 10px 20px;
    font-size: 14px;
    margin-inline-start: 110px;
  }
  @media ${devices.xxxl} {
    padding: 13px 25px;
    font-size: 20px;
    margin-inline-start: 210px;
  }
`;

export const HeaderLink = styled.span`
  margin: 0 4px;
  font-size: 11px;
  cursor: pointer;
  font-weight: 500;
  color: ${({ active }) => (active ? "#217371" : "#808080")};
  position: relative;
  ${({ active }) =>
    active &&
    css`
      &::before {
        content: "";
        position: absolute;
        bottom: -4px;
        right: ${({ theme }) => (!theme.isRtl ? "unset" : 0)};
        left: ${({ theme }) => (theme.isRtl ? "unset" : 0)};
        width: 65%;
        height: 2px;
        border-radius: 7px;
        background-color: #e66b27;
      }
    `}
  @media ${devices.sm} {
    font-size: 12px;
    margin: 0 10px;
  }
  @media ${devices.lg} {
    font-size: 14px;
    margin: 0 15px;

    &::before {
      bottom: -6px;
      height: 3px;
    }
  }
  @media ${devices.xl} {
    font-size: 18px;
    margin: 0 20px;

    &::before {
      bottom: -10px;
      height: 5px;
    }
  }
  @media ${devices.xxxl} {
    font-size: 20px;
    margin: 0 30px;

    &::before {
      bottom: -12px;
      height: 7px;
    }
  }
`;
