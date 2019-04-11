import React from 'react'
import PropTypes from 'prop-types';

import '../scss/ColorList.scss'

import Color from './Color'

const ColorList = ({colors=[], onRemove=f=>f}) =>
    <div className="color-list">
        {(colors.length === 0) ?
            <p>No Colors Listed. (Add a Color)</p> :
            colors.map(color =>
                <Color key={color.id} {...color}
                       onRemove={() => onRemove(color.id)} />
            )
        }
    </div>

ColorList.propTypes = {
    colors: PropTypes.array,
    onRemove: PropTypes.func
}

export default ColorList
