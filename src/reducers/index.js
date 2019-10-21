import { combineReducers} from 'redux'
import Todos from './todos'
import VisibilityFiter from './visibilityFiter'

export default combineReducers({
	todos,
	visibilityFiter
})