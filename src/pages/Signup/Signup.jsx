import React, { useMemo, useContext } from "react";
import PageLoad from "../../components/Animations/PageLoad/PageLoad";
import { ThemeContext } from "../../themes/ThemeContext";
import SignupMobile from "./layout/SignupMobile/SignupMobile";

const Signup = () => {
  const { theme } = useContext(ThemeContext);

  const loadedComponent = useMemo(() => {
    return <SignupMobile theme={theme} />;
  }, [theme]);

  return <PageLoad onSuccessComponent={loadedComponent} />;
};

export default Signup;
