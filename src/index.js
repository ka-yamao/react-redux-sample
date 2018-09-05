import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import todos from './reducers/todos';
import { addTodo } from './actions';

let store = createStore(todos);

store.dispatch(addTodo('Hello React!!!!'));
store.dispatch(addTodo('Hello Redux!!!!'));

console.log('--------');
console.log(store.getState());
console.log('--------');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
