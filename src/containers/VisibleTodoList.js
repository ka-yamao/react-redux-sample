import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions';

// コンポーネントをconnectするコンテナ

const mapStateToProps = state => {
  return { todos: getVisibleTodos(state.todos, state.visibilityFilter) };
};

const mapDispathToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
  }
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispathToProps
)(TodoList);

export default VisibleTodoList;
