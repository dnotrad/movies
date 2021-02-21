import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { searchReducer } from "./reducers/searchReducer"

export const store = createStore(searchReducer, applyMiddleware(thunk));
