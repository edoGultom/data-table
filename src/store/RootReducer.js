import { combineReducers } from "redux";
import ListDataReducer from './list-data/reducer'

const rootReducer = combineReducers({
    ListDataReducer: ListDataReducer
})
export default rootReducer