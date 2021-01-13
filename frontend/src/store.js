import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";
export default configureStore(
    {
        reducer: rootReducer,
    },
    applyMiddleware(thunk)
);
