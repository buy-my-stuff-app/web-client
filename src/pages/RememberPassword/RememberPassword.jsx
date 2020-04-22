import React, { useMemo, useContext } from "react";
import PageLoad from "../../components/Animations/PageLoad/PageLoad";
import { ThemeContext } from "../../themes/ThemeContext";
import RememberPasswordMobile from "./layout/RememberPasswordMobile/RememberPasswordMobile";

const RememberPassword = () => {
  const { theme } = useContext(ThemeContext);

  const loadedComponent = useMemo(() => {
    return <RememberPasswordMobile theme={theme} />;
  }, [theme]);

  return <PageLoad onSuccessComponent={loadedComponent} />;
};

export default RememberPassword;
