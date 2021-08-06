import styled from "styled-components";
import { devices } from "styles/styles";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.linear};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentBox = styled.div`
  background: ${({ theme }) => theme.colors.bg_100};
  border-radius: 20px;
  padding: 20px;
  @media ${devices.sm} {
    width: calc(100% - 50px);
  }
  @media ${devices.lg} {
    width: calc(90% - 100px);
  }
  @media ${devices.xl} {
    width: calc(50% - 100px);
  }
  @media ${devices.xxl} {
    width: calc(50% - 100px);
  }
  @media ${devices.xxxl} {
    width: calc(50% - 100px);
  }
`;

export const Heading = styled.h2`
  font-size: 40px;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.p};
`;

export const Paragraph = styled.p`
  font-size: 24px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;
