import * as types from "./actionTypes";
import * as api from "../../api/course";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function loadCourses() {
  return function(dispatch) {
    return api
    .getCourses()
    .then(courses => {
      dispatch(displayCourses(courses));
    })
    .catch(error => {
      throw error;
    });
  };
}

export function displayCourses(courses) {
  return { type: types.DISPLAY_COURSES, courses };
}
