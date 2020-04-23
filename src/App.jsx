import React, { useState, useEffect, useContext, useMemo } from "react";
import Navigation from "./config/Navigation";
import { useSelector, useDispatch } from "react-redux";
import { appLoader } from "./modules/app/index";
import { appHasLoaded } from "./redux/app/app.actions";
import AppLoadingPage from "./components/LoadingPages/AppLoadingPage/AppLoadingPage";
import AppError from "./components/ErrorPages/AppError/AppError";
import PageLoad from "./components/Animations/PageLoad/PageLoad";
import { MIN_SPLASH_SCREEN_TIME } from "./config/config";
import { ThemeContext } from "./themes/ThemeContext";
import AppStyles from "./App.styles";
import ErrorBoundary from "react-error-boundary";
import { setLoggedUser } from "./redux/app/app.actions";

const App = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector(state => state.app);
  const { theme } = useContext(ThemeContext);
  const [appError, setAppError] = useState(false);

  useEffect(() => {
    if (!reduxState.appHasLoaded) {
      const appOptions = {
        splashScreenTime: MIN_SPLASH_SCREEN_TIME
      };
      appLoader(appOptions)
        .then(({ loggedUserId }) => {
          dispatch(setLoggedUser(loggedUserId));
        })
        .catch(() => {
          setAppError(true);
        })
        .finally(() => {
          dispatch(appHasLoaded());
        });
    }
  }, [dispatch, reduxState.appHasLoaded]);

  const onSuccess = useMemo(
    () => (
      <>
        <Navigation userLoggedId={reduxState.loggedUserId} />
      </>
    ),
    [reduxState.loggedUserId]
  );

  return (
    <>
      <AppStyles theme={theme} />
      <ErrorBoundary FallbackComponent={AppError}>
        <PageLoad
          isLoading={!reduxState.appHasLoaded}
          hasError={appError}
          onLoadComponent={<AppLoadingPage />}
          onSuccessComponent={onSuccess}
          onErrorComponent={<AppError />}
        />
      </ErrorBoundary>
    </>
  );
};

export default App;
