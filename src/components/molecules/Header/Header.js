import React from "react";
// import PropTypes from "prop-types";
import ColorModeSwitch from "../ColorModeSwitch";
import LangSwitcher from "../LangSwitch";

const Header = () => {
  return (
    <header>
      <ColorModeSwitch />
      <LangSwitcher />
    </header>
  );
};

Header.propTypes = {};

export default Header;
