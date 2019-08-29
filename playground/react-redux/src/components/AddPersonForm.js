import React from 'react'
import PropTypes from 'prop-types'

const AddPersonForm = ({onNewPerson=f=>f}) => {

    let _firstName, _lastName

    const submit = e => {
        e.preventDefault()
        onNewPerson(_firstName.value, _lastName.value)
        _firstName.value = ''
        _lastName.value = ''
        _firstName.focus()
    }

    return (
        <form onSubmit={submit}>
            <input ref={input => _firstName = input}
                   type="text"
                   placeholder="first name..." required/>
            <input ref={input => _lastName = input}
                   type="text" required/>
            <button>ADD</button>
        </form>
    )

}

AddPersonForm.propTypes = {
    onNewPerson: PropTypes.func
}

export default AddPersonForm
