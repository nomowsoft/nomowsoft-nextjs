import styled, { css } from "styled-components";
import { devices } from "styles/styles";
import { motion } from "framer-motion";

export const IntroContainer = styled(motion.div)`
  display: flex;
  max-width: 1850px;
  margin: auto;
  padding: 20px 10px;
  padding-top: 100px;
  position: relative;
  /* background-image: url("/assets/header_pic.svg"); */
  & .header-image {
    /* display: none !important; */
    display: none;
    min-width: 50% !important;
    height: 100% !important;
    right: ${({ theme }) => (theme.isRtl ? "auto" : "0px")} !important;
    left: ${({ theme }) => (theme.isRtl ? "-10px" : "auto")} !important;
    ${({ theme }) =>
      !theme.isRtl &&
      css`
        transform: scalex(-1);
      `}
  }
  & .image-box {
    display: none;
    position: absolute;
    height: 100%;
    right: ${({ theme }) => (!theme.isRtl ? 0 : "auto")};
    left: ${({ theme }) => (!theme.isRtl ? "auto" : 0)};
    width: 100%;
    top: 0;
  }
  @media ${devices.sm} {
    padding: 20px;
    padding-top: 100px;
  }
  @media ${devices.lg} {
    min-height: 50vh;
    align-items: center;
    & .image-box {
      display: flex;
    }
  }
  @media ${devices.xl} {
    padding: 25px;
    padding-top: 120px;
  }
  @media ${devices.xxl} {
    padding: 28px;
    padding-top: 80px;
    min-height: 100vh;
    & .image-box {
      width: 150%;
      height: 112%;
    }
  }
  @media ${devices.xxxl} {
    padding: 28px 25px;
  }
`;

export const MainTitle = styled(motion.h3)`
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 40px;
  letter-spacing: normal;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text};
  z-index: 5;
  & .animated-box {
    margin-inline-start: 10px;
  }
  & span {
    color: ${({ theme }) => theme.colors.secondary};
    position: relative;
    /* cursor: pointer; */
    & > div {
      top: 13px;
      width: 12px;
      height: 12px;
      right: ${({ theme }) => (theme.isRtl ? "auto" : "-19px")};
      left: ${({ theme }) => (theme.isRtl ? "-42px" : "auto")};
    }
  }
  @media ${devices.lg} {
    font-size: 50px;
    line-height: 65px;
    & span {
      & > div {
        top: 15px;
      }
    }
  }
  @media ${devices.xl} {
    font-size: 50px;
    line-height: 70px;
    & span {
      & > div {
        top: 15px;
      }
    }
  }
  @media ${devices.xxl} {
    font-size: 55px;
    line-height: 75px;
    & span {
      & > div {
        top: 20px;
      }
    }
  }
  @media ${devices.xxxl} {
    font-size: 60px;
    line-height: 85px;
    & span {
      & > div {
        top: 18px;
      }
    }
  }
`;
