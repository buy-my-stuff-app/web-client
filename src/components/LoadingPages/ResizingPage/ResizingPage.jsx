import React, { useContext } from "react";
import { Styles } from "./ResizingPage.styles";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../../themes/ThemeContext";

const ResizingPage = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  return (
    <Styles theme={theme}>
      <h1 className="_message">
        {t("app:components.loading.resizing.message")}
      </h1>
    </Styles>
  );
};

export default ResizingPage;
