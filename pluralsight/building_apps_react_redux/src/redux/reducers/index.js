import { combineReducers } from "redux";
import courses from "./courseReducer"; // we can call it courses as we're exporting default so we can name it what we like

const rootReducer = combineReducers({
    courses
});

export default rootReducer;