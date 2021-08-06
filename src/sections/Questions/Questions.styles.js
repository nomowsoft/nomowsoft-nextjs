import styled, { css } from "styled-components";
import { devices } from "styles/styles";
import { motion } from "framer-motion";
import {
  SharedContainer,
  SharedTitle,
} from "sections/Identity/Identity.styles";

export const QuestionsContainer = styled(SharedContainer)``;

export const QuestionsTitle = styled(SharedTitle)`
  padding-top: 0;
  margin: 40px 0;
`;

export const QuestionsBox = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  padding-top: 30px;
  background: ${({ theme }) => theme.colors.linear};
`;

export const ItemsBox = styled.div`
  display: grid;
  grid-template-columns: 100%;
  @media ${devices.lg} {
    grid-template-columns: 1fr 1fr;
  }
  /* flex-wrap: wrap; */
`;
export const Item = styled.div`
  display: inline-block;
  background: ${({ theme }) => theme.colors.bg_100};
  /* width: calc(50% - 20px); */
  border-radius: 4px;
  margin: 0 10px 10px;
  padding: 24px 26px;
  /* height: fit-content; */
  & .title-box {
    cursor: pointer;
    display: flex;
    align-items: center;
    & h3 {
      font-size: 13px;
    }
    & svg {
      margin-inline-end: 10px;
    }
  }
  & .description {
    color: ${({ theme }) => theme.colors.text_100};
    opacity: 0.4;
  }
  @media ${devices.lg} {
    ${({ active }) => active && css`
      grid-column-end: span 1;
      grid-row-end: span 2;
    `}
    & .title-box {
      & h3 {
        font-size: 15px;
      }
    }
    & .description {
      font-size: 15px;
    }
  }
  @media ${devices.xxl} {
    & .title-box {
      & h3 {
        font-size: 18px;
      }
    }
    & .description {
      font-size: 18px;
    }
  }
  @media ${devices.xxxl} {
    & .title-box {
      & h3 {
        font-size: 20px;
      }
    }
    & .description {
      font-size: 20px;
    }
  }
`;
