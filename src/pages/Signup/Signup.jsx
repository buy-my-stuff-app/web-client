import React, { useMemo, useContext, useCallback } from "react";
import PageLoad from "../../components/Animations/PageLoad/PageLoad";
import { ThemeContext } from "../../themes/ThemeContext";
import { isMobile } from "react-device-detect";
import SignupDesktop from "./layout/SignupDesktop/SignupDesktop";
import SignupMobile from "./layout/SignupMobile/SignupMobile";

const Signup = () => {
  const { theme } = useContext(ThemeContext);

  const loadedComponent = useMemo(() => {
    if (isMobile) {
      return <SignupMobile theme={theme} />;
    }
    return <SignupDesktop theme={theme} />;
  }, [theme]);

  return <PageLoad onSuccessComponent={loadedComponent} />;
};

export default Signup;
