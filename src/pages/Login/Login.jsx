import React, { useMemo, useContext, useCallback } from "react";
import PageLoad from "../../components/Animations/PageLoad/PageLoad";
import { ThemeContext } from "../../themes/ThemeContext";
import { isMobile } from "react-device-detect";
import LoginDesktop from "./layout/LoginDesktop/LoginDesktop";
import LoginMobile from "./layout/LoginMobile/LoginMobile";

const Login = () => {
  const { theme } = useContext(ThemeContext);

  const loadedComponent = useMemo(() => {
    if (isMobile) {
      return <LoginMobile theme={theme} />;
    }
    return <LoginDesktop theme={theme} />;
  }, [theme]);

  return <PageLoad onSuccessComponent={loadedComponent} />;
};

export default Login;
