import React, { useMemo, useContext, useCallback } from "react";
import PageLoad from "../../components/Animations/PageLoad/PageLoad";
import { ThemeContext } from "../../themes/ThemeContext";
import { isMobile } from "react-device-detect";
import RememberPasswordDesktop from "./layout/RememberPasswordDesktop/RememberPasswordDesktop";
import RememberPasswordMobile from "./layout/RememberPasswordMobile/RememberPasswordMobile";

const RememberPassword = () => {
  const { theme } = useContext(ThemeContext);

  const loadedComponent = useMemo(() => {
    if (isMobile) {
      return <RememberPasswordMobile theme={theme} />;
    }
    return <RememberPasswordDesktop theme={theme} />;
  }, [theme]);

  return <PageLoad onSuccessComponent={loadedComponent} />;
};

export default RememberPassword;
