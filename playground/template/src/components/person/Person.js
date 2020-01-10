import React from 'react'
import PropTypes from 'prop-types'

const Person = ({ firstName, lastName }) =>
    <div className="person">My name is {firstName}, {lastName}</div>

Person.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string
}

export default Person
