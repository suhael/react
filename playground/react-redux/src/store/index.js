import { createStore, combineReducers, applyMiddleware } from 'redux'
import { people } from './reducers'
import stateData from '../data/initialState'

const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

const saver = store => next => action => {
    let result = next(action)
    localStorage['redux-person-store'] = JSON.stringify(store.getState())
    return result
}

const storeFactory = (initialState=stateData) =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({people}),
        (localStorage['redux-person-store']) ?
            JSON.parse(localStorage['redux-person-store']) :
            stateData
    )

export default storeFactory
