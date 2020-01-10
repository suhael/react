import * as types from "./actionTypes";

export function createPerson(person) {
  return { type: types.CREATE_PERSON, person };
}

export function deletePerson(person) {
  return { type: types.DELETE_PERSON, person}
}
