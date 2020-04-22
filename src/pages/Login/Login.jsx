import React, { useMemo, useContext } from "react";
import PageLoad from "../../components/Animations/PageLoad/PageLoad";
import { ThemeContext } from "../../themes/ThemeContext";
import LoginMobile from "./layout/LoginMobile/LoginMobile";

const Login = () => {
  const { theme } = useContext(ThemeContext);

  const loadedComponent = useMemo(() => {
    return <LoginMobile theme={theme} />;
  }, [theme]);

  return <PageLoad onSuccessComponent={loadedComponent} />;
};

export default Login;
