import { combineReducers } from "redux";
import problemsReducer from "./problems";
export default combineReducers({
    problems: problemsReducer,
});
