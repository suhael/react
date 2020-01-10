import React from 'react'
import PropTypes from 'prop-types'

const CreatePersonForm = ({onSubmit=f=>f}) => {

    let _firstName, _lastName

    const submit = e => {
        e.preventDefault()
        onSubmit(_firstName.value, _lastName.value)
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

CreatePersonForm.propTypes = {
  onSubmit: PropTypes.func
}

export default CreatePersonForm
