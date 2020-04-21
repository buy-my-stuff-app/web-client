import React, { useMemo, useContext, useCallback } from "react";
import PageLoad from "../../components/Animations/PageLoad/PageLoad";
import { ThemeContext } from "../../themes/ThemeContext";
import { isMobile } from "react-device-detect";
import MainPageDesktop from "./layout/MainPageDesktop/MainPageDesktop";
import MainPageMobile from "./layout/MainPageMobile/MainPageMobile";

const MainPage = () => {
  const { theme } = useContext(ThemeContext);

  const loadedComponent = useMemo(() => {
    if (isMobile) {
      return <MainPageMobile theme={theme} />;
    }
    return <MainPageDesktop theme={theme} />;
  }, [theme]);

  return <PageLoad onSuccessComponent={loadedComponent} />;
};

export default MainPage;
