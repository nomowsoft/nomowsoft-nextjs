import React from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { IconButton } from "components/atoms";
import { moonO } from "react-icons-kit/fa/moonO";
import { ic_wb_sunny } from "react-icons-kit/md/ic_wb_sunny";
// import PropTypes from "prop-types";
import { useMode } from "styles/useTheme";
import { devices } from "styles/styles";

const ColorModeSwitch = () => {
  const { toggleTheme, theme } = useMode();
  return (
    <IconBox small onClick={() => toggleTheme()}>
      <Icon icon={theme === "light" ? moonO : ic_wb_sunny} />
    </IconBox>
  );
};

export const IconBox = styled(IconButton)`
  height: 20px;
  width: 20px;
  font-size: 10px;
  & i svg {
    height: 12px;
    width: 12px;
  }
  @media ${devices.sm} {
    height: 22px;
    width: 22px;
    font-size: 11px;
    & i svg {
      height: 14px;
      width: 14px;
    }
  }
  @media ${devices.lg} {
    height: 26px;
    width: 26px;
    font-size: 12px;
    & i svg {
      height: 15px;
      width: 15px;
    }
  }
  @media ${devices.xl} {
    height: 32px;
    width: 32px;
    font-size: 14px;
    & i svg {
      height: 17px;
      width: 17px;
    }
  }
  @media ${devices.xxxl} {
    height: 40px;
    width: 40px;
    font-size: 18px;
    & i svg {
      height: 24px;
      width: 24px;
    }
  }
`;

export default ColorModeSwitch;
