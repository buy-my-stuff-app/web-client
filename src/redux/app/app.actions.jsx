import { APP_LOADED, SET_LOGGED_USER } from "./app.types";

export const appHasLoaded = () => {
  return {
    type: APP_LOADED
  };
};

export const setLoggedUser = loggedUser => {
  return {
    type: SET_LOGGED_USER,
    payload: loggedUser
  };
};
