import React from "react";
import PropTypes from "prop-types";
import { Styles } from "./MainPageMobile.styles";
import Theme from "../../../../themes/Theme";

const MainPageMobile = ({ theme }) => {
  return (
    <Styles theme={theme}>
      <p>MainPageMobile 2</p>
    </Styles>
  );
};

MainPageMobile.propTypes = {
  theme: PropTypes.instanceOf(Theme)
};

export default MainPageMobile;
