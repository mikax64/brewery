import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { breweryReducer } from "./reducers/breweryReducers";

const store = createStore(breweryReducer, applyMiddleware(thunk));

export default store;
