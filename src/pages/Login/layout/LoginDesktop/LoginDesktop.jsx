import React from "react";
import PropTypes from "prop-types";
import { Styles } from "./LoginDesktop.styles";
import Theme from "../../../../themes/Theme";

const LoginDesktop = ({ theme }) => {
  return (
    <Styles theme={theme}>
      <p>Login Desktop</p>
    </Styles>
  );
};

LoginDesktop.propTypes = {
  theme: PropTypes.instanceOf(Theme)
};

export default LoginDesktop;
