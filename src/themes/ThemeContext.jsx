import React, { createContext, useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import themes from "./index";

const Context = createContext();

const defaultTheme =
  themes[process.env.REACT_APP_DEFAULT_THEME] || themes.light;

const Provider = ({ children }) => {
  const [theme, updateTheme] = useState(defaultTheme);

  const setTheme = useCallback(themeName => {
    const newTheme = themes[themeName] || defaultTheme;
    updateTheme(newTheme);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme, setTheme]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.node
};

export const ThemeProvider = Provider;
export const ThemeContext = Context;
