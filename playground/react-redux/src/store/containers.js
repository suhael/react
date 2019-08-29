import { connect } from 'react-redux'
import PeopleList from '../components/PeopleList'
import AddPersonForm from "../components/AddPersonForm";
import { addPerson } from "./actions"

export const People = connect(
    state =>
        ({
            people: [...state.people]
        }),
    null
)(PeopleList)

export const NewPerson = connect(
    null,
    dispatch =>
        ({
            onNewPerson(firstName, lastName) {
                dispatch(addPerson(firstName, lastName))
            }
        })
)(AddPersonForm)
