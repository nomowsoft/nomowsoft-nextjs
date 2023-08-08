import styled from "styled-components";
import { devices } from "styles/styles";
import { motion } from "framer-motion";

export const FooterContainer = styled(motion.footer)`
  width: 100%;
  background: ${({ theme }) => theme.colors.bg};
`;

export const FooterBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  max-width: 1850px;
  margin: auto;
  padding: 10px;

  @media ${devices.sm} {
    padding: 20px;
  }
  @media ${devices.lg} {
    padding: 27px 20px;
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
  }
  @media ${devices.xl} {
    padding: 37px 25px;
  }
  @media ${devices.xxl} {
    padding: 28px;
  }
  @media ${devices.xxxl} {
    padding: 50px 25px;
  }
`;

export const Section = styled(motion.div)`
  position: relative;
  & > div {
    position: absolute !important;
    top: -20px;
  }
  & h4 {
    color: ${({ theme }) => theme.colors.primary};
    text-transform: capitalize;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: 0.3px;
    margin: 10px 0;
    & span {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  & li {
    font-size: 12px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    margin: 10px 0;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text_50};
    & i {
      margin-inline-end: 20px;
      cursor: pointer;
    }
    & :last-child i {
      cursor: default;
    }
    & .email {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
    }
    & a {
      color: ${({ active, theme }) =>
        active ? theme.colors.primary : theme.colors.text_100};
      text-decoration: none !important;
    }
  }
  @media ${devices.lg} {
    & h4 {
      font-size: 16px;
    }
    & li {
      font-size: 14px;
    }
    & .email {
      font-size: 16px;
    }
  }
  @media ${devices.xl} {
    & h4 {
      font-size: 18px;
      margin: 20px 0;
    }
    & li {
      font-size: 16px;
      margin: 15px 0;
    }
    & > div {
      top: -10px;
    }
  }
  @media ${devices.xxxl} {
    & h4 {
      font-size: 20px;
    }
    & li {
      font-size: 19px;
      margin: 23px 0;
      & i {
        margin-inline-end: 24px;
      }
    }
  }
`;

export const PrivacySection = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: ${({ theme }) => theme.colors.primary};
  & span {
    color: #fff;
    font-size: 12px;
  }
  @media ${devices.lg} {
    & span {
      font-size: 16px;
    }
  }
  @media ${devices.xl} {
    & span {
      font-size: 18px;
    }
  }
  @media ${devices.xxxl} {
    & span {
      font-size: 20px;
    }
  }
`;
