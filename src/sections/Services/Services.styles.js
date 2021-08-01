import styled from "styled-components";
import { devices, breakpoints } from "styles/styles";
import { motion } from "framer-motion";
import {
  SharedContainer,
  SharedTitle,
} from "sections/Identity/Identity.styles";
import Slider from "react-slick";
import { Button } from "components/atoms";

export const ServicesContainer = styled.div`
  width: 100%;
  background: linear-gradient(to bottom, #f2f1f1 -18%, #edecee); ;
`;

export const ServicesBox = styled(SharedContainer)`
  margin: 20px 0;
  @media ${devices.xl} {
    margin: 40px auto;
  }
  @media ${devices.xxl} {
    margin: 60px auto;
  }
  @media ${devices.xxxl} {
    margin: 80px auto;
  }
`;

export const ServicesTitle = styled(SharedTitle)``;

export const Description = styled(motion.p)`
  font-size: 12px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 20px;
  letter-spacing: normal;
  color: #808080;
  @media ${devices.lg} {
    font-size: 14px;
    width: 70%;
  }
  @media ${devices.xl} {
    font-size: 20px;
    line-height: 28px;
  }
  @media ${devices.xxl} {
    font-size: 22px;
    line-height: 35px;
    width: 60%;
  }
  @media ${devices.xxxl} {
    font-size: 24px;
    line-height: 40px;
  }
`;

export const ListBox = styled(Slider)`
  margin-top: 30px;
  & .slick-next,
  & .slick-prev {
    position: absolute;
    top: -14px;
    right: ${({ theme }) => (theme.isRtl ? "calc(100% - 50px)" : "auto")};
    left: ${({ theme }) => (theme.isRtl ? "auto" : "calc(100% - 25px)")};
  }
  & .slick-prev {
    right: ${({ theme }) => (theme.isRtl ? "calc(100% - 25px)" : "auto")};
    left: ${({ theme }) => (theme.isRtl ? "auto" : "calc(100% - 55px)")};
  }
  & .list-item {
    padding: 20px 24px;
    border-radius: 6px;
    background: #fff;
    margin-inline-end: 5px;
    & .item-title {
      font-size: 14px;
      margin: 10px 0;
      text-transform: capitalize;
    }
    & .item-text {
      color: #808080;
      font-size: 12px;
      margin: 10px 0;
      text-transform: capitalize;
    }
    & .dot {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      display: block;
      background: #e66c35;
    }
  }
  @media ${devices.xxl} {
    & .list-item {
      & .item-title {
        font-size: 20px;
        margin: 10px 0;
      }
      & .item-text {
        font-size: 14px;
      }
    }
  }
  @media ${devices.xxxl} {
    & .list-item {
      & .item-title {
        font-size: 24px;
        margin: 15px 0;
      }
      & .item-text {
        font-size: 18px;
      }
    }
  }
`;

export const CardBtn = styled(Button)`
  width: 100%;
  font-size: 12px;
  margin-top: 20px;
  @media ${devices.xxl} {
    font-size: 15px;
    padding: 12px;
  }
  @media ${devices.xxxl} {
    margin-top: 25px;
    padding: 15px;
    font-size: 20px;
  }
`;

export const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  // fade: true,
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: breakpoints.xl,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: breakpoints.lg,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: breakpoints.md,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: breakpoints.sm,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
