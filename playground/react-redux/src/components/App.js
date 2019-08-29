import React from 'react'
import { People, NewPerson } from '../store/containers'

const App = () =>
    <div className="app">
        <NewPerson />
        <People />
    </div>

export default App
