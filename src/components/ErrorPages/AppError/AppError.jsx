import React, { useContext } from "react";
import { Styles } from "./AppError.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../UI/Card/Card";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../../themes/ThemeContext";
import AppStyles from "../../../App.styles";

const AppError = props => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <AppStyles theme={theme} />
      <Styles theme={theme} {...props}>
        <Card className="AppError" theme={theme}>
          <FontAwesomeIcon
            icon="exclamation-triangle"
            className="AppError__errorIcon"
          />
          <p className="AppError__errorMessage">
            {t("app:components.error.app.message")}
          </p>
          <p className="AppError__errorMessage">
            <a href="/">{t("app:components.error.app.link")}</a>
          </p>
        </Card>
      </Styles>
    </>
  );
};

export default AppError;
