import React, { useMemo, useContext } from "react";
import PageLoad from "../../components/Animations/PageLoad/PageLoad";
import { ThemeContext } from "../../themes/ThemeContext";
import MainPageMobile from "./layout/MainPageMobile/MainPageMobile";

const MainPage = () => {
  const { theme } = useContext(ThemeContext);

  const loadedComponent = useMemo(() => {
    return <MainPageMobile theme={theme} />;
  }, [theme]);

  return <PageLoad onSuccessComponent={loadedComponent} />;
};

export default MainPage;
