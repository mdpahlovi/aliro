import { createStore } from "redux";
import contentReducer from "./reducers/contentReducer";

const store = createStore(contentReducer);

export default store;
