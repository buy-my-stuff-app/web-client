import React from "react";
import PropTypes from "prop-types";
import { Styles } from "./MainPageDesktop.styles";
import Theme from "../../../../themes/Theme";

const MainPageDesktop = ({ theme }) => {
  return (
    <Styles theme={theme}>
      <p>MainPageDesktop</p>
    </Styles>
  );
};

MainPageDesktop.propTypes = {
  theme: PropTypes.instanceOf(Theme)
};

export default MainPageDesktop;
