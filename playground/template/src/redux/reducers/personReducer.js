import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function personReducer(state = initialState.people, action) {
  switch (action.type) {
    case types.CREATE_PERSON:
      return [...state, { ...action.person }];
    case types.DELETE_PERSON:
      return state.filter( val => val !== action.person );
    default:
      return state;
  }
}
