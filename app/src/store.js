import { createStore, applyMiddleware, combineReducers } from 'redux'
import { locationReducer } from './reducers/locationReducer.js'
import { commentsReducer } from './reducers/commentsReducer.js'
// Enables the store for ReduxDevTools on web browser
import { composeWithDevTools } from 'redux-devtools-extension'
// Redux middleware
import thunk from 'redux-thunk'

const reducer = combineReducers({
  location: locationReducer,
  comments: commentsReducer
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
