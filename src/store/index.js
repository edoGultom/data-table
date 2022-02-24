import rootreducer from './RootReducer'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

let store = createStore(rootreducer, applyMiddleware(thunk))
export default store;
