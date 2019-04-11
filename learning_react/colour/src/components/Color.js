import React from 'react'
import PropTypes from 'prop-types';

import '../scss/Color.scss'

const Color = ({title, color, onRemove=f=>f}) =>
    <section className="color">
        <h1>{title}</h1>
        <button onClick={onRemove}>X</button>
        <div style={{ backgroundColor: color }}>Colour</div>
    </section>

Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onRemove: PropTypes.func
}

export default Color
