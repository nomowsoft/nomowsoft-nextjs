import React from "react";
import PropTypes from "prop-types";

const Spacer = (props) => {
  const { width, height } = props;
  return (
    <div style={{ width: width || 5, height: height || 5, ...props.style }} />
  );
};

Spacer.propTypes = {
  style: PropTypes.shape(),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Spacer;
