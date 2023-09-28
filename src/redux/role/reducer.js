import initialState from "./state";

import { LOGIN, LOGOUT } from "./types";

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        role: action.payload,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        role: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default roleReducer;
