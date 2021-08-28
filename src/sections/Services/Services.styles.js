import styled from "styled-components";
import { devices, breakpoints } from "styles/styles";
import {
  SharedContainer,
  SharedTitle,
} from "sections/Identity/Identity.styles";
import Slider from "react-slick";
import { Button } from "components/atoms";

export const ServicesContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.linear};
  padding-bottom: 20px;
  padding-top: 20px;
  margin: 10px auto;
  @media ${devices.lg} {
    margin: 20px auto 0;
  }
  @media ${devices.xl} {
    margin: 30px auto 0;
  }
  @media ${devices.xxl} {
    margin: 40px auto 0;
  }
  @media ${devices.xxxl} {
    margin: 50px auto 0;
  }
`;

export const ServicesBox = styled(SharedContainer)`
  margin: auto;
`;

export const ServicesTitle = styled(SharedTitle)`
  margin-top: 20px;
`;

export const ListBox = styled(Slider)`
  margin-top: 30px;
  & .slick-next,
  & .slick-prev {
    position: absolute;
    top: -48px;
    opacity: 0;
    right: ${({ theme }) => (theme.isRtl ? "calc(100% - 57px)" : "auto")};
    left: ${({ theme }) => (theme.isRtl ? "auto" : "calc(100% - 29px)")};
  }
  & .slick-prev {
    top: -20px;
    right: ${({ theme }) => (theme.isRtl ? "calc(100% - 25px)" : "auto")};
    left: ${({ theme }) => (theme.isRtl ? "auto" : "calc(100% - 62px)")};
  }
  & .slick-slide > div {
    margin-inline-end: 5px;
  }
  & .list-item {
    padding: 20px 24px;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors.bg_100};
    display: flex !important;
    justify-content: space-between;
    flex-direction: column;
    & .item-title {
      font-size: 14px;
      margin: 10px 0;
      text-transform: capitalize;
    }
    & .item-text {
      color: ${({ theme }) => theme.colors.text_100};
      font-size: 12px;
      margin: 10px 0;
      line-height: 20px;
      opacity: 0.4;
      text-transform: capitalize;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    & .dot {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      display: block;
      background: #e66c35;
    }
  }
  &::before {
    content: "";
    position: absolute;
    width: 70px;
    height: 70px;
    background: url("/assets/change.svg");
    top: -70px;
    left: auto;
    background-size: contain;
    right: ${({ theme }) => (theme.isRtl ? "auto" : "0")};
    left: ${({ theme }) => (theme.isRtl ? "-3px" : "auto")};

    background-repeat: no-repeat;
    background-position: center;
    z-index: 0;
  }
  @media ${devices.lg} {
    & .list-item {
      height: 300px;
    }
  }
  @media ${devices.xxl} {
    margin-top: 50px;
    & .list-item {
      padding-top: 30px;
      margin-inline-end: 15px;
      height: 360px;
      & .item-title {
        font-size: 20px;
        margin: 25px 0 15px;
      }
      & .item-text {
        font-size: 14px;
      }
    }
  }
  @media ${devices.xxxl} {
    margin-top: 70px;

    & .list-item {
      margin-inline-end: 20px;
      padding-top: 40px;
      height: 470px;

      & .item-title {
        font-size: 26px;
        margin: 30px 0;
      }
      & .item-text {
        font-size: 20px;
        line-height: 28px;
      }
      & .dot {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

export const CardBtn = styled(Button)`
  width: 100%;
  font-size: 12px;
  margin-top: 20px;
  font-weight: 500;
  @media ${devices.xxl} {
    font-size: 15px;
    padding: 12px;
  }
  @media ${devices.xxxl} {
    margin-top: 34px;
    padding: 10px 15px;
    font-size: 20px;
  }
`;

export const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  swipeToSlide: true,
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
