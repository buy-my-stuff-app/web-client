import { createGlobalStyle } from "styled-components";
import colorWithOpacity from "./modules/helpers/colorWithOpacity/colorWithOpacity";

const AppStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
    font-size: ${({ theme }) => theme.fontSize};
    color: ${({ theme }) => theme.textColorPrimary};
    background-color: ${({ theme }) => theme.bgColorPrimary};
    font-family: ${({ theme }) => theme.fontFamily};
    margin: 0;
    padding: 0;
  }

  a{
    color: ${({ theme }) => theme.textColorPrimary};
    font-weight: bold;
    text-decoration: none;
    transition: color 300ms ease-in-out;
  }

  a:hover, a:active{
    color: ${({ theme }) => colorWithOpacity(theme.textColorPrimary, 75)};
  }
`;

export default AppStyles;
