import styled from "styled-components";
import { devices } from "styles/styles";
import {
  SharedContainer,
  SharedTitle,
} from "sections/Identity/Identity.styles";
// import Image from 'next/image';

export const AboutBox = styled(SharedContainer)`
  background: linear-gradient(to bottom, #f2f1f1 -18%, #edecee);
`;
export const AboutTitle = styled(SharedTitle)`
  text-align: center;
  padding-bottom: 24px;
  width: 80%;
  margin: auto;
`;

export const AboutContainer = styled.div`
  width: 100%;
  padding-bottom: 20px;
  padding-top: 20px;

  @media ${devices.lg} {
    margin: 40px auto 0;
  }
  @media ${devices.xl} {
    margin: 60px auto 0;
  }
  @media ${devices.xxl} {
    margin: 80px auto 0;
  }
  @media ${devices.xxxl} {
    margin: 100px auto 0;
  }
`;

export const BoxSlider = styled.div`
  @media ${devices.md} {
    & .box {
      width: 300%;
    }
  }
  @media ${devices.lg} {
    & .box {
      width: 200%;
    }
  }
  @media ${devices.xxl} {
    width: 90%;
    margin: 20px auto;
  }
`;

export const ListItems = styled.div`
  display: grid;
  grid-template-columns: 100%;
  justify-content: center;
  gap: 12px;

  & .item {
    background: #fff;
    border-radius: 12px;
    min-height: 380px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.08);
    /* & div:first-child {
      width: 100px !important;
      margin: auto !important;
      display: block !important;
    } */
    & .card-img {
      background: url("/assets/icon.svg");
      width: 100px;
      height: 100px;
      margin: auto;
    }
  }
  @media ${devices.lg} {
    margin: 40px auto 0;
    grid-template-columns: 50% 50%;
  }
  @media ${devices.xl} {
    margin: 60px auto 0;
    grid-template-columns: 33% 33% 33%;
    gap: 10px;
  }
  @media ${devices.xxl} {
    margin: 80px auto 0;
  }
  @media ${devices.xxxl} {
    margin: 100px auto 0;
  }
`;
