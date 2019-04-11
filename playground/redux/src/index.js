// import React from 'react';
// import { render } from 'react-dom';
//
// import App from './App';
//
// render(<App />, document.getElementById('app'));


import storeFactory from './components/store'
import {addPerson, removePerson, sortPeople} from './components/actions'

const store = storeFactory()

store.dispatch(addPerson("Bonkers Blue"))
store.dispatch(sortPeople("title"))
store.dispatch(removePerson("f9005b4e-975e-433d-a646-79df172e1dbb"))

console.log('current state', store.getState())
console.log('Go ahead, dispatch some actions...')
