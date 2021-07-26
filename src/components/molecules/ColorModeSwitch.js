import React from "react";
import { Icon } from "react-icons-kit";
import { moonO } from "react-icons-kit/fa/moonO";
// import PropTypes from "prop-types";
import { useMode } from "styles/useTheme";

const ColorModeSwitch = () => {
  const { toggleTheme } = useMode();
  return (
    <div onClick={() => toggleTheme()}>
      <Icon icon={moonO} size={25} />
    </div>
  );
};

ColorModeSwitch.propTypes = {};

export default ColorModeSwitch;
