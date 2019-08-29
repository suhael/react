import C from './constants'
import { v4 } from 'uuid'

export const addPerson = (firstName, lastName) =>
    ({
        type: C.ADD_PERSON,
        id: v4(),
        firstName,
        lastName
    })
