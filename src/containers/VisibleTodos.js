import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../action';

const mapStateToProps = state => ({
	todos: state.todos
})

const mapDisPatchToProps = dispatch => ({
	toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps,mapDisPatchToProps)(TodoList)