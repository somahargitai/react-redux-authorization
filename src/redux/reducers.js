import { combineReducers } from "redux";

import roleReducer from "./role/reducer";

const reducers = combineReducers({
  roleReducer: roleReducer,
});

export default reducers;
