import React from 'react'
import PropTypes from 'prop-types';

import '../scss/AddColorForm.scss'

const AddColorForm = ({addColor=f=>f}) => {

    let _title, _color

    const submit = e => {
        e.preventDefault()
        addColor(_title.value, _color.value)
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }

    return (
        <form className="add-color" onSubmit={submit}>
            <input ref={input => _title = input}
                   type="text"
                   placeholder="color title..." required/>
            <input ref={input => _color = input}
                   type="color" required/>
            <button>ADD</button>
        </form>
    )

}

AddColorForm.propTypes = {
    addColor: PropTypes.func
}

export default AddColorForm
