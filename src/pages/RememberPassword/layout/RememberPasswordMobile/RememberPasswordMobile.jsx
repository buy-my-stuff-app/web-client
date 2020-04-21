import React from "react";
import PropTypes from "prop-types";
import { Styles } from "./RememberPasswordMobile.styles";
import Theme from "../../../../themes/Theme";

const RememberPasswordMobile = ({ theme }) => {
  return (
    <Styles theme={theme}>
      <p>RememberPasswordMobile</p>
    </Styles>
  );
};

RememberPasswordMobile.propTypes = {
  theme: PropTypes.instanceOf(Theme)
};

export default RememberPasswordMobile;
