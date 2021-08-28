import styled from "styled-components";
import { devices } from "styles/styles";
import { motion } from "framer-motion";

export const SharedContainer = styled(motion.div)`
  max-width: 1850px;
  margin: auto;
  padding: 20px 10px;
  @media ${devices.sm} {
    padding: 20px;
  }
  @media ${devices.xl} {
    padding: 25px;
  }
  @media ${devices.xxl} {
    padding: 28px;
  }
  @media ${devices.xxxl} {
    padding: 28px 25px;
  }
`;
export const SharedTitle = styled.h4`
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.text_50};
  text-transform: capitalize;
  @media ${devices.lg} {
    font-size: 24px;
  }
  @media ${devices.xxl} {
    font-size: 35px;
  }
`;

export const IdentityContainer = styled(SharedContainer)`
  display: flex;
  justify-content: space-between;
  margin: 20px auto 0;
  @media ${devices.lg} {
    align-items: flex-end;
    justify-content: space-evenly;
  }
`;
export const IdentityTitle = styled(SharedTitle)``;
export const InfoSection = styled(motion.div)`
  flex: 1;
  @media ${devices.lg} {
    flex: 0.7;
  }
`;

export const IdentityIconBox = styled.div`
  width: 80px;
  height: 80px;
  box-shadow: 0 8px 52px 0 ${({ theme }) => theme.colors.shadow};
  background-color: #ffffff;
  border-radius: 50%;
  margin-inline-end: 25px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.bg_100};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${devices.lg} {
    width: 200px;
    height: 200px;
  }
  @media ${devices.xxl} {
    width: 300px;
    height: 300px;
  }
`;

export const Description = styled(motion.p)`
  font-size: 12px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 20px;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.text_100};
  opacity: 0.4;

  @media ${devices.lg} {
    font-size: 14px;
    width: 70%;
  }
  @media ${devices.xl} {
    font-size: 20px;
  }
  @media ${devices.xxl} {
    font-size: 22px;
    line-height: 35px;
    width: 100%;
  }
  @media ${devices.xxxl} {
    font-size: 24px;
    line-height: 40px;
  }
`;
