import React from "react";
import PropTypes from "prop-types";
import { Styles } from "./SignupMobile.styles";
import Theme from "../../../../themes/Theme";

const SignupMobile = ({ theme }) => {
  return (
    <Styles theme={theme}>
      <p>SignupMobile</p>
    </Styles>
  );
};

SignupMobile.propTypes = {
  theme: PropTypes.instanceOf(Theme)
};

export default SignupMobile;
