import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducer";
import { legacy_createStore } from "redux";

const store = legacy_createStore(reducer, composeWithDevTools());

export default store;
