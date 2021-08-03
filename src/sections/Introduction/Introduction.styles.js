import styled from "styled-components";
import { devices } from "styles/styles";
import { motion } from "framer-motion";

export const IntroContainer = styled(motion.div)`
  display: flex;
  max-width: 1800px;
  margin: auto;
  padding: 20px 10px;
  margin-top: 100px;
  @media ${devices.sm} {
    padding: 20px;
  }
  @media ${devices.lg} {
    min-height: calc(50vh - 90px);
    align-items: flex-end;
  }
  @media ${devices.xl} {
    padding: 25px;
    margin-top: 120px;
  }
  @media ${devices.xxl} {
    align-items: center;
    padding: 28px;
    margin-top: 80px;
    min-height: calc(100vh - 90px);
  }
  @media ${devices.xxxl} {
    padding: 28px 0;
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
  color: ${({ theme }) => theme.colors.gray_200};
  & span {
    color: ${({ theme }) => theme.colors.secondary};
    position: relative;

    &::before {
      content: "";
      position: absolute;
      bottom: -4px;
      right: ${({ theme }) => (!theme.isRtl ? "unset" : 0)};
      left: ${({ theme }) => (theme.isRtl ? "unset" : 0)};
      width: 110%;
      height: 2px;
      border-radius: 7px;
      background-color: #e66b27;
    }
    & > div {
      top: 13px;
      width: 12px;
      height: 12px;
      right: ${({ theme }) => (theme.isRtl ? "auto" : "-19px")};
      left: ${({ theme }) => (theme.isRtl ? "-42px" : "auto")};
    }
  }
  @media ${devices.xl} {
    font-size: 40px;
    line-height: 50px;
    & span {
      & > div {
        top: 15px;
      }
    }
  }
  @media ${devices.xxl} {
    font-size: 55px;
    line-height: 70px;
    & span {
      & > div {
        top: 20px;
      }
    }
  }
  @media ${devices.xxxl} {
    font-size: 60px;
    line-height: 90px;
    & span {
      & > div {
        top: 18px;
      }
    }
  }
`;
