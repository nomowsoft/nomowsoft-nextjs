import styled from "styled-components";
import { devices } from "styles/styles";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.linear};
  min-height: calc(100vh - 84px);
  display: flex;
  align-items: center;
  justify-content: center;
  & p {
    justify-content: center;
  }
  & .card {
    max-width: 285px !important;
    max-height: 451px !important;
    min-width: 285px !important;
    min-height: 451px !important;
    border: none !important;
    border-radius: 20px !important;
    background-color: ${({ theme }) => theme.colors.bg_100} !important;
    color: ${({ theme }) => theme.colors.text_100} !important;
    & .card .card-title {
      color: ${({ theme }) => theme.colors.secondary} !important;
    }
    & p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  & .card .card-img-top {
    padding: 5px;
    border-radius: 20px;
    heght: 20rem !important;
  }
  & .btn-primary {
    background-color: ${({ theme }) => theme.colors.text_title} !important;
    border-color: ${({ theme }) => theme.colors.text_title} !important;
  }
  & .container .row h2,
  h5,
  p {
    color: ${({ theme }) => theme.colors.text_100} !important;
  }
`;

export const ContentBox = styled.div`
  background: ${({ theme }) => theme.colors.bg_100};
  border-radius: 20px;
  padding: 20px;
  margin-top: -7rem;
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
