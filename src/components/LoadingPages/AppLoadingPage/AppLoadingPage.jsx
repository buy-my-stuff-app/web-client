import React, { useContext } from "react";
import { Styles } from "./AppLoadingPage.styles";
import logo from "../../../assets/images/logo.png";
import { ThemeContext } from "../../../themes/ThemeContext";

const AppLoadingPage = props => {
  const { theme } = useContext(ThemeContext);
  return (
    <Styles theme={theme} {...props}>
      <div className="_logo">
        <div className="_logo-container">
          <img src={logo} alt="Web App Logo" className="_logo-image" />
        </div>
      </div>
    </Styles>
  );
};

export default AppLoadingPage;
