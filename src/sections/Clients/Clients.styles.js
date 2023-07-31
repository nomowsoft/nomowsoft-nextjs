import styled from "styled-components";
import { devices } from "styles/styles";
import {
  SharedContainer,
  SharedTitle,
} from "sections/Identity/Identity.styles";

export const ClientBox = styled(SharedContainer)``;
export const ClientTitle = styled(SharedTitle)``;

export const ClientContainer = styled.div`
  width: 100%;
  padding-bottom: 20px;
  padding-top: 20px;
  margin: 20px auto 0;
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
    margin: 90px auto 0;
  }
`;

export const Slider = styled.div`
  display: grid;
  place-item: center;
  & .slider {
    height: 250px;
    margin: auto;
    position: relative;
    width: 90%;
    display: grid;
    place-items: center;
    overflow: hidden;
  }
  & .slider-track{
    display: flex;
    animation: scroll 40s linear infinite
  }
  & .slide{
    height: 200px;
    width: 250px;
    display: flex;
    align-items: center;
    padding: 15px;
  }
  & img{
    width:100%;
    transition: transform 1s;
  }
  & img:hover{
    transform: translate(20px);
  }
  & slider::before,
    slider::after{
    background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgb(255,255,255,0)100%);
    content: '';
    height: 100%;
    position: absolute;
    width: 15%;
    z-index: 2;
  } & slider::before{
    left: 0;
    top:0;
  }
  } & slider::after{
    right: 0;
    top:0;
    transform: rotateZ(180deg)
  }
  @keyframes scroll {
    0%{
      transform: translatex(0);
    }
    & 100%{
      transform: translatex(calc(-250px * 9));
    }
  }
  `