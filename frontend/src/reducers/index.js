import { combineReducers } from "redux";
import authReducer from "./auth";
import problemsReducer from "./problems";
export default combineReducers({
  problems: problemsReducer,
  auth: authReducer,
});
