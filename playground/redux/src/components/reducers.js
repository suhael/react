import C from './constants'

export const person = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_PERSON:
            return {
                id: action.id,
                name: action.name
            }
        default :
            return state
    }
}

export const people = (state = [], action) => {
    switch (action.type) {
        case C.ADD_PERSON :
            return [
                ...state,
                person({}, action)
            ]
        case C.REMOVE_PERSON :
            return state.filter(
                p => p.id !== action.id
            )
        default:
            return state
    }
}

export const sort = (state = "SORTED_BY_DATE", action) => {
    switch (action.type) {
        case C.SORT_PEOPLE:
            return action.sortBy
        default :
            return state
    }
}
