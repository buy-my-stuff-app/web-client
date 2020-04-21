import React from "react";
import PropTypes from "prop-types";
import { Styles } from "./SignupDesktop.styles";
import Theme from "../../../../themes/Theme";

const SignupDesktop = ({ theme }) => {
  return (
    <Styles theme={theme}>
      <p>SignupDesktop</p>
    </Styles>
  );
};

SignupDesktop.propTypes = {
  theme: PropTypes.instanceOf(Theme)
};

export default SignupDesktop;
