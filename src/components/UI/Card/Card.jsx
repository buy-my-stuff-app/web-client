import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Styles } from "./Card.styles";
import { ThemeContext } from "../../../themes/ThemeContext";

const Card = ({ children, ...props }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Styles theme={theme} {...props}>
      {children}
    </Styles>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired
};

export default Card;
