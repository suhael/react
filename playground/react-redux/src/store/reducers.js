import C from "./constants";

export const people = (state = [], action) => {
    switch (action.type) {
        case C.ADD_PERSON :
            return [
                ...state,
                {
                    id: action.id,
                    firstName: action.firstName,
                    lastName: action.lastName
                }
            ]
        default:
            return state
    }
}
