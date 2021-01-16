import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";

// when browser or page reloads state will disappeard so we store state in localstorage and load when browser reloades
function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    console.log(serializedState);
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}
const preloadedState = loadFromLocalStorage();
const store = configureStore(
  {
    reducer: rootReducer,
    preloadedState: preloadedState,
  },
  applyMiddleware(thunk)
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
