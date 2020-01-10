import { combineReducers } from "redux";
import people from "./personReducer";
import courses from "./courseReducer";

const rootReducer = combineReducers({
  people, courses
});

export default rootReducer;
