import React from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid'

import '../scss/APP.scss'

import AddColorForm from './AddColorForm'

import ColorList from './ColorList'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            colors: [ {
                id: v4(),
                title: "sea",
                color: "blue",
                rating: 0
            }]
        }
        this.addColor = this.addColor.bind(this)
        this.removeColor = this.removeColor.bind(this)
    }

    addColor(title, color) {
        this.setState(prevState => ({
            colors: [
                ...prevState.colors,
                {
                    id: v4(),
                    title,
                    color,
                    rating: 0
                }
            ]
        }))
    }

    removeColor(id) {
        this.setState(prevState => ({
            colors: prevState.colors.filter(color => color.id !== id)
        }))
    }

    render() {
        const { addColor, removeColor } = this
        const { colors } = this.state
        return (
            <div className="app">
                <AddColorForm addColor={addColor} />
                <ColorList colors={colors}
                           onRemove={removeColor}
                />
            </div>
        )
    }

}

export default App;
