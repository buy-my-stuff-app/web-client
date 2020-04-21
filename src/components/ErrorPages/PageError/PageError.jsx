import React, { useContext } from "react";
import { Styles } from "./PageError.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../UI/Card/Card";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../../themes/ThemeContext";

const PageError = props => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  return (
    <Styles theme={theme} {...props}>
      <Card className="PageError" theme={theme}>
        <FontAwesomeIcon
          icon="exclamation-triangle"
          className="PageError__errorIcon"
        />
        <p className="PageError__errorMessage">
          {t("app:components.error.app.message")}
        </p>
        <p className="PageError__errorMessage">
          <a href="/">{t("app:components.error.app.link")}</a>
        </p>
      </Card>
    </Styles>
  );
};

export default PageError;
