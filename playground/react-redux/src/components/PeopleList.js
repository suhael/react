import React from 'react'
import PropTypes from 'prop-types'
import Person from './Person'

const PeopleList = ({ people=[] }) =>
    <div>
        {(people.length === 0) ?
            <p>No People Listed. (Add a person)</p> :
            people.map(person =>
                <Person key={person.id}
                       {...person} />
            )
        }
    </div>

PeopleList.propTypes = {
    people: PropTypes.array
}

export default PeopleList
