import { combineReducers } from "redux";
import authReducer from "./auth";
import problemsReducer from "./problems";
import submitReducer from "./submit";
export default combineReducers({
  problems: problemsReducer,
  auth: authReducer,
  submit: submitReducer,
});
