import C from './constants'
import { v4 } from 'uuid'

export const addPerson = (name) =>
    ({
        type: C.ADD_PERSON,
        id: v4(),
        name,
        timestamp: new Date().toString()
    })

export const removePerson = id =>
    ({
        type: C.REMOVE_PERSON,
        id
    })

export const sortPeople = sortedBy =>
    (sortedBy === "name") ?
        ({
            type: C.SORT_PEOPLE,
            sortBy: "SORTED_BY_NAME"
        }) :
        (sortedBy === "date") ?
            ({
                type: C.SORT_PEOPLE,
                sortBy: "SORTED_BY_DATE"
            }) :
            ({
                type: C.SORT_PEOPLE,
                sortBy: "SORTED_BY_ID"
            })
