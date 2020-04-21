import { APP_LOADED, SET_LOGGED_USER } from "./app.types";

const initialState = {
  appHasLoaded: false,
  loggedUserId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADED: {
      return {
        ...state,
        appHasLoaded: true
      };
    }
    case SET_LOGGED_USER: {
      return {
        ...state,
        loggedUserId: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
